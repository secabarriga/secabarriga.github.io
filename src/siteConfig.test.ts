import { describe, expect, it } from "vitest";

import { assetUrl, buildCheckoutUrl, normalizeCheckoutUrl, PRODUCT, RECIPE_ADDON } from "./siteConfig";

describe("site configuration", () => {
  it("keeps the verified inventory total", () => {
    expect(PRODUCT.modules.reduce((total, module) => total + module.pages, 0)).toBe(
      PRODUCT.totalPages,
    );
  });

  it("resolves public assets below the configured deployment base", () => {
    expect(assetUrl("/previews/test.jpg")).toBe(`${import.meta.env.BASE_URL}previews/test.jpg`);
  });

  it("keeps the Black Friday offer and optional add-on totals consistent", () => {
    expect(PRODUCT.regularPriceCents).toBe(9990);
    expect(PRODUCT.priceCents).toBe(1990);
    expect(RECIPE_ADDON.priceCents).toBe(490);
    expect(PRODUCT.regularPriceCents - PRODUCT.priceCents).toBe(8000);
    expect(PRODUCT.priceCents + RECIPE_ADDON.priceCents).toBe(2480);
    expect(PRODUCT.totalPdfs).toBe(3);
    expect(PRODUCT.totalPages).toBe(57);
  });

  it("accepts only HTTPS checkout URLs", () => {
    expect(normalizeCheckoutUrl("http://pay.cakto.com.br/teste")).toBeNull();
    expect(normalizeCheckoutUrl("javascript:alert(1)")).toBeNull();
    expect(normalizeCheckoutUrl("https://pay.cakto.com.br/teste")).toContain(
      "https://pay.cakto.com.br/teste",
    );
  });

  it("passes allowed campaign parameters to the checkout", () => {
    const result = buildCheckoutUrl(
      "https://pay.cakto.com.br/oferta",
      "?utm_source=instagram&utm_campaign=lancamento&email=nao-enviar",
    );

    expect(result).toContain("utm_source=instagram");
    expect(result).toContain("utm_campaign=lancamento");
    expect(result).toContain("src=site-protocolo-4-semanas");
    expect(result).not.toContain("email=");
  });
});
