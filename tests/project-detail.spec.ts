import { test, expect } from "@playwright/test";

const FIRST_PROJECT = "Otter Body Mechanism Mimicking Robot";
const SECOND_PROJECT = "Micromouse Robot: Argo";
const LAST_PROJECT = "Vintage Movie Projector Replica";

test.describe("Project detail view", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(".project-tile").first().click();
    await expect(
      page.getByRole("heading", { name: FIRST_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test("renders category badge, title and tags", async ({ page }) => {
    await expect(
      page.locator(".project-detail-badge", {
        hasText: "Mechatronic System Design Project",
      }),
    ).toBeVisible();
    const pills = page.locator(".project-tag-pill");
    const count = await pills.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("renders at least one documentation section with a heading", async ({
    page,
  }) => {
    const headings = page.locator(".project-detail-heading");
    expect(await headings.count()).toBeGreaterThanOrEqual(1);
    await expect(headings.first()).toBeVisible();
  });

  test("next-project navigation moves to the following project", async ({
    page,
  }) => {
    await page.getByRole("link", { name: new RegExp(`Next Project`) }).click();
    await expect(
      page.getByRole("heading", { name: SECOND_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test("previous-project navigation wraps to the last project", async ({
    page,
  }) => {
    await page.getByRole("link", { name: /Previous Project/ }).click();
    await expect(
      page.getByRole("heading", { name: LAST_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test('the center "All Projects" button returns to the overview', async ({
    page,
  }) => {
    await page.getByRole("link", { name: "All Projects" }).click();
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();
  });

  test("projects with video hero media render a video element", async ({
    page,
  }) => {
    // DIYAKAWA 3.0 is the third project (Otter → Argo → DIYAKAWA)
    await page.getByRole("link", { name: /Next Project/ }).click();
    await expect(
      page.getByRole("heading", { name: SECOND_PROJECT, level: 1 }),
    ).toBeVisible();
    await page.getByRole("link", { name: /Next Project/ }).click();
    await expect(
      page.getByRole("heading", { name: "DIYAKAWA 3.0", level: 1 }),
    ).toBeVisible();
    const videos = page.locator("video");
    expect(await videos.count()).toBeGreaterThanOrEqual(1);
  });
});