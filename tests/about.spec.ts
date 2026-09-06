import { test, expect } from "@playwright/test";

test.describe("About Me", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: "Who am I ?", level: 2 }).scrollIntoViewIfNeeded();
  });

  test('renders the "Who am I ?" title', async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Who am I ?", level: 2 }),
    ).toBeVisible();
  });

  test("renders the owner's portrait uncropped", async ({ page }) => {
    const img = page.locator(".intro-image");
    await img.scrollIntoViewIfNeeded();
    // The portrait is lazy-loaded; wait until it actually has content.
    await expect
      .poll(
        () =>
          img.evaluate(
            (el) =>
              (el as HTMLImageElement).complete &&
              (el as HTMLImageElement).naturalWidth > 0,
          ),
        { timeout: 15000 },
      )
      .toBe(true);
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("alt", /Vihanga C\. Kumanayaka/);
    const box = await img.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      const ratio = box.width / box.height;
      expect(ratio).toBeCloseTo(3 / 4, 2);
    }
  });

  test("contains the four bio paragraphs", async ({ page }) => {
    const text = await page.locator(".intro-text").allTextContents();
    expect(text).toHaveLength(4);
    expect(text[0]).toContain("Vihanga C. Kumanayaka");
    expect(text[1]).toContain("GPA of 3.69/4.00");
    expect(text[1]).toContain("Dean's List");
    expect(text[2]).toContain("Karate Team");
    expect(text[2]).toContain("Colours for two consecutive years");
    expect(text[3]).toContain("I see every challenge as an opportunity to learn, build, and grow.");
  });

  test('emphasises the "why ?" with quotation marks', async ({ page }) => {
    const why = page.locator(".intro-text").nth(1);
    await expect(why).toContainText('"why ?"');
    await expect(why.locator("em")).toContainText('"why ?"');
  });

  test("bold emphasis renders as <strong>", async ({ page }) => {
    const first = page.locator(".intro-text").first();
    const strong = first.locator("strong");
    expect(await strong.count()).toBeGreaterThanOrEqual(3);
  });
});