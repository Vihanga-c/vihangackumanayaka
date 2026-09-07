import { test, expect } from "@playwright/test";

const PROJECT_TITLES = [
  "Otter Body Mechanism Mimicking Robot",
  "Micromouse Robot: Argo",
  "DIYAKAWA 3.0",
  "Bicycle & Rider Data Gathering System",
  "Computer Vision-Powered Pick-and-Place Robot",
  "Factory Floor Optimization for Production Flow",
  "Reverse Engineering of an Infrared Cooker",
  "Vintage Movie Projector Replica",
];

test.describe("My Projects section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#projects").scrollIntoViewIfNeeded();
  });

  test("renders the section title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();
  });

  test("shows all 8 project tiles", async ({ page }) => {
    const tiles = page.locator(".project-tile");
    await expect(tiles).toHaveCount(8);
    for (const title of PROJECT_TITLES) {
      await expect(page.locator(".project-tile-title", { hasText: title }).first()).toBeVisible();
    }
  });

  test("each tile exposes a View Project action", async ({ page }) => {
    const tiles = page.locator(".project-tile");
    const count = await tiles.count();
    for (let i = 0; i < count; i++) {
      await expect(tiles.nth(i).getByText("View Project")).toBeVisible();
    }
  });

  test("tiles are keyboard operable (Enter opens details)", async ({ page }) => {
    const firstTile = page.locator(".project-tile").first();
    await firstTile.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("heading", { name: PROJECT_TITLES[0], level: 1 }),
    ).toBeVisible();
  });

  test("clicking a tile opens the project detail view and Back returns", async ({
    page,
  }) => {
    await page.locator(".project-tile").first().click();
    await expect(
      page.getByRole("heading", { name: PROJECT_TITLES[0], level: 1 }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Back to Projects" }).click();
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();
  });

  test("tiles are real links pointing at their project route", async ({
    page,
  }) => {
    const tiles = page.locator(".project-tile");
    await expect(tiles).toHaveCount(8);
    for (const tile of await tiles.all()) {
      const href = await tile.getAttribute("href");
      expect(href).toMatch(/^\/projects\/[a-z0-9-]+$/);
    }
  });
});