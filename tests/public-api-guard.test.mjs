import test from "node:test";
import assert from "node:assert/strict";
import { boundedJson, publicRateLimit } from "../lib/public-api-guard.ts";

function post(value, ip = "203.0.113.22", extraHeaders = {}) {
  return new Request("https://mbdigitaltech.com.br/api/orcamento", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip, ...extraHeaders },
    body: typeof value === "string" ? value : JSON.stringify(value),
  });
}

test("JSON público aceita apenas objetos válidos", async () => {
  assert.deepEqual(await boundedJson(post({ name: "Maria" })), { name: "Maria" });
  for (const raw of ["[]", "null", "{", '"abc"']) {
    const result = await boundedJson(post(raw));
    assert.ok(result instanceof Response, "rejeição obrigatória");
    assert.equal(result.status, 400);
  }
});

test("limita JSON independentemente do tamanho anunciado", async () => {
  const oversized = await boundedJson(post({ description: "a".repeat(30000) }), 20000);
  assert.ok(oversized instanceof Response);
  assert.equal(oversized.status, 413);
  const chunked = post({ description: "a".repeat(2000) }, "203.0.113.22", { "content-length": "0" });
  const rejected = await boundedJson(chunked, 1000);
  assert.ok(rejected instanceof Response);
  assert.equal(rejected.status, 413);
});

test("rejeita content-type não JSON", async () => {
  const request = post("hello", "203.0.113.34", { "content-type": "text/plain" });
  const rejected = await boundedJson(request);
  assert.ok(rejected instanceof Response);
  assert.equal(rejected.status, 415);
});

test("limita repetição por IP e responde Retry-After", () => {
  const a = post({}, "192.0.2.10");
  const b = post({}, "192.0.2.11");
  for (let i = 0; i < 3; i++) assert.equal(publicRateLimit(a, "test-security-" + process.pid, 3), null);
  const blocked = publicRateLimit(a, "test-security-" + process.pid, 3);
  assert.ok(blocked instanceof Response);
  assert.equal(blocked.status, 429);
  assert.ok(Number(blocked.headers.get("retry-after")) >= 1);
  assert.equal(publicRateLimit(b, "test-security-" + process.pid, 3), null);
});
