import { test, expect } from "@playwright/test";

test.describe("Navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("is extended at the top of the page with all links", async ({
    page,
  }) => {
    const nav = page.locator(".navbar-glass");
    await expect(nav).toHaveClass(/extended/);
    for (const label of ["About me", "View my projects", "Get in touch"]) {
      await expect(nav.getByRole("link", { name: label })).toBeVisible();
    }
  });

  test("collapses into the hamburger circle on scroll", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 400));
    const nav = page.locator(".navbar-glass");
    await expect(nav).toHaveClass(/collapsed/);
    await expect(page.locator(".hamburger-toggle")).toBeVisible();
  });

  test("opens the dropdown menu and scrolls to the linked section", async ({
    page,
  }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    const nav = page.locator(".navbar-glass");
    await expect(nav).toHaveClass(/collapsed/);

    await nav.click();
    const dropdown = page.locator(".navbar-dropdown");
    await expect(dropdown).toBeVisible();
    await expect(dropdown.getByRole("menuitem", { name: "Get in touch" })).toBeVisible();

    const contact = page.locator("#contact");
    const target = await contact.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
    await dropdown.getByRole("menuitem", { name: "Get in touch" }).click();

    await page.waitForFunction(
      (t) => Math.abs(window.scrollY - t) < 4,
      target,
      { timeout: 10000 },
    );
  });

  test("active section is highlighted in the dropdown", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const nav = page.locator(".navbar-glass");
    await expect(nav).toHaveClass(/collapsed/);
    await nav.click();
    const dropdownLink = page.locator(".nav-dropdown-link.active", {
      hasText: "Get in touch",
    });
    await expect(dropdownLink).toHaveCount(1);
  });
});