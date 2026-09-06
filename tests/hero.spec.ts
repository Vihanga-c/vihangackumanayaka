import { test, expect } from "@playwright/test";

test.describe("Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders name, degree, university and tagline", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Vihanga C. Kumanayaka", level: 1 }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "B.Sc (Hons) Mechanical Engineering, Specialising in Mechatronic Systems Engineering",
      ),
    ).toBeVisible();
    await expect(page.getByText("(University of Moratuwa)")).toBeVisible();

    await expect(
      page.getByText(
        "Engineering projects, experiences and the skills honed along the way.",
      ),
    ).toBeVisible();
    await expect(
      page.getByText("Designed, Built, Executed and Documented."),
    ).toBeVisible();
  });

  test('renders the eyebrow and a single "Get my CV" CTA', async ({
    page,
  }) => {
    await expect(page.getByText("Engineering Portfolio")).toBeVisible();
    const cvButton = page.getByRole("link", { name: "Get my CV" });
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toHaveCount(1);
  });

  test('"Get my CV" downloads the CV PDF automatically', async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("link", { name: "Get my CV" }).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe(
      "Vihanga Chamodya Kumanayaka - CV.pdf",
    );

    const stream = await download.createReadStream();
    const chunks: Buffer[] = [];
    for await (const chunk of stream) chunks.push(chunk as Buffer);
    const content = Buffer.concat(chunks);
    expect(content.subarray(0, 4).toString()).toBe("%PDF");
    expect(content.length).toBeGreaterThan(1000);
  });

  test("shimmer tagline alternates between the two lines", async ({ page }) => {
    const line1 = page.locator(".hero-shimmer-line").nth(0);
    const line2 = page.locator(".hero-shimmer-line").nth(1);

    await expect(line1).toBeVisible();
    await expect(line2).toBeVisible();

    // Sample both lines over >2 toggle periods (toggle = 1400ms); each line
    // must be shimmering at some point and idle at some point.
    const samples = { line1: [] as boolean[], line2: [] as boolean[] };
    for (let i = 0; i < 8; i++) {
      samples.line1.push(
        await line1.evaluate((el) => el.classList.contains("is-shimmering")),
      );
      samples.line2.push(
        await line2.evaluate((el) => el.classList.contains("is-shimmering")),
      );
      await page.waitForTimeout(400);
    }
    expect(samples.line1).toContain(true);
    expect(samples.line1).toContain(false);
    expect(samples.line2).toContain(true);
    expect(samples.line2).toContain(false);
  });
});