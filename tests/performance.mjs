import { performance } from "node:perf_hooks";

const base = process.env.MB_PERF_URL || "http://127.0.0.1:3127";
const paths = ["/", "/servicos", "/orcamento"];
const concurrency = 4;
const repeats = 12;
const thresholdP95Ms = 2500;

function quantile(values, percentile) {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.ceil((percentile / 100) * sorted.length) - 1);
  return Math.round(sorted[index]);
}

async function sample(path) {
  const start = performance.now();
  try {
    const response = await fetch(base + path, {
      redirect: "follow",
      signal: AbortSignal.timeout(7000),
      headers: { "User-Agent": "MB-Digital-Tech-QualityLab-Performance" },
    });
    await response.arrayBuffer();
    return { path, ok: response.status === 200, status: response.status, ms: performance.now() - start };
  } catch (error) {
    return { path, ok: false, error: String(error).slice(0, 100), ms: performance.now() - start };
  }
}

async function main() {
  const warmup = await Promise.all(paths.map(sample));
  if (warmup.some((r) => !r.ok)) {
    console.error("STAGING_NOT_READY", JSON.stringify(warmup));
    process.exitCode = 2;
    return;
  }
  const tasks = Array.from({ length: repeats }, () => paths).flat();
  const records = [];
  let position = 0;
  async function worker() {
    while (position < tasks.length) {
      const path = tasks[position++];
      records.push(await sample(path));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  const durations = records.map((r) => r.ms);
  const result = {
    environment: "local production staging (not a public-load guarantee)",
    base,
    concurrency,
    requests: records.length,
    passed: records.filter((r) => r.ok).length,
    failed: records.filter((r) => !r.ok).length,
    p50Ms: quantile(durations, 50),
    p95Ms: quantile(durations, 95),
    maxMs: Math.ceil(Math.max(...durations)),
    thresholdP95Ms,
  };
  console.log("MB_QUALITY_PERFORMANCE", JSON.stringify(result));
  if (result.failed > 0 || result.p95Ms > thresholdP95Ms) process.exitCode = 2;
}
main().catch((error) => {
  console.error("PERFORMANCE_FATAL", error);
  process.exitCode = 2;
});
