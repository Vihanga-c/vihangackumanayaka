import { test, expect } from "@playwright/test";

const FIRST_PROJECT = "Otter Body Mechanism Mimicking Robot";

test.describe("Client-side routing", () => {
  test("opening a project updates the URL to /projects/<id>", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator(".project-tile").first().click();
    await expect(page).toHaveURL(/\/projects\/otter-robot$/);
    await expect(
      page.getByRole("heading", { name: FIRST_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test("browser back returns to the main portfolio instead of exiting the site", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator(".project-tile").first().click();
    await expect(page).toHaveURL(/\/projects\/otter-robot$/);

    await page.goBack();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();

    // And forward returns to the detail view again
    await page.goForward();
    await expect(page).toHaveURL(/\/projects\/otter-robot$/);
    await expect(
      page.getByRole("heading", { name: FIRST_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test("back/forward walk through previously viewed projects", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator(".project-tile").first().click();
    await page.getByRole("link", { name: /Next Project/ }).click();
    await expect(page).toHaveURL(/\/projects\/micromouse-argo$/);

    await page.goBack();
    await expect(page).toHaveURL(/\/projects\/otter-robot$/);
    await expect(
      page.getByRole("heading", { name: FIRST_PROJECT, level: 1 }),
    ).toBeVisible();
  });

  test("a project route can be deep-linked directly (open in new tab / refresh)", async ({
    page,
  }) => {
    await page.goto("/projects/micromouse-argo");
    await expect(
      page.getByRole("heading", { name: "Micromouse Robot: Argo", level: 1 }),
    ).toBeVisible();
  });

  test('"Back to Projects" returns to "/" and lands on the projects section', async ({
    page,
  }) => {
    await page.goto("/projects/diyakawa");
    await page.getByRole("link", { name: "Back to Projects" }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();
    await expect
      .poll(() =>
        page.locator("#projects").evaluate((el) => el.getBoundingClientRect().top),
      )
      .toBeLessThan(200);
  });

  test("unknown project ids and unknown routes redirect to the portfolio", async ({
    page,
  }) => {
    await page.goto("/projects/does-not-exist");
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();

    await page.goto("/some/unknown/path");
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: "My Projects", level: 2 }),
    ).toBeVisible();
  });
});