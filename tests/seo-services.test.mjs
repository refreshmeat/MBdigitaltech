import test from "node:test";
import assert from "node:assert/strict";
import { servicePages } from "../lib/seo-services.ts";

test("catálogo tem URLs únicas e válidas", () => {
  assert.ok(servicePages.length >= 10, "catálogo não deve desaparecer por engano");
  const slugs = servicePages.map((service) => service.slug);
  assert.equal(new Set(slugs).size, slugs.length, "URLs duplicadas");
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});

test("cada serviço traz conteúdo comercial e metadados próprios", () => {
  for (const item of servicePages) {
    assert.ok(item.title.trim().length >= 10, item.slug + ": título");
    assert.ok(item.seoTitle.trim().length >= 12, item.slug + ": SEO title");
    assert.ok(item.description.trim().length >= 65, item.slug + ": description");
    assert.ok(item.intro.trim().length >= 90, item.slug + ": introdução");
    assert.ok(item.deliverables.length > 0, item.slug + ": entregas");
    assert.ok(item.intent.length > 0, item.slug + ": intenções");
    assert.ok(item.keywords.length > 0, item.slug + ": keywords");
    assert.ok(item.faq.every((pair) => pair.length === 2 && pair.every((s) => s.trim().length > 8)), item.slug + ": perguntas");
  }
});

test("recomendações internas não apontam para páginas inexistentes", () => {
  const slugs = new Set(servicePages.map((x) => x.slug));
  for (const item of servicePages) {
    assert.notEqual(item.related.includes(item.slug), true, item.slug + ": autolink");
    for (const related of item.related) {
      assert.ok(slugs.has(related), item.slug + ": link inválido " + related);
    }
  }
});

test("títulos e descrições não foram danificados por erro de codificação", () => {
  for (const item of servicePages) {
    for (const field of [item.title, item.seoTitle, item.description]) {
      assert.doesNotMatch(field, /\uFFFD|Ã[£§©¤¥¡ª«]|Â[°ªº]/, item.slug + ": texto corrompido");
    }
  }
});
