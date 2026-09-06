import { test, expect } from "@playwright/test";

test.describe("Contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
  });

  test("renders the Contact Me title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Contact Me", level: 2 }),
    ).toBeVisible();
  });

  test("shows phone, email and LinkedIn with correct links", async ({ page }) => {
    const phone = page.locator(".contact-method.mobile .contact-method-link");
    await expect(phone).toHaveText("+94 71 460 3634");
    await expect(phone).toHaveAttribute("href", "tel:+94714603634");

    const email = page.locator(".contact-method.email .contact-method-link");
    await expect(email).toHaveText("vihangackumanayaka@gmail.com");
    await expect(email).toHaveAttribute("href", "mailto:vihangackumanayaka@gmail.com");

    const linkedin = page.locator(".contact-method.linkedin .contact-method-link");
    await expect(linkedin).toHaveText("linkedin.com/in/vihanga-kumanayaka");
    await expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/vihanga-kumanayaka",
    );
  });
});