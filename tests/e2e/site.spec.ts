import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("only the two requested PRD sections are present, with complete company positioning", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("main > section")).toHaveCount(2);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Powering Progress.Shaping Tomorrow.",
  );
  await expect(page.locator("#executive-summary")).toContainText("Pekajangan");
  await expect(page.locator(".audience-list li")).toHaveCount(13);
  await expect(page.locator(".principle-card")).toHaveCount(6);
  for (const title of [
    "Safety",
    "Integrity",
    "Reliability",
    "Innovation",
    "Sustainability",
    "Partnership",
  ])
    await expect(
      page
        .locator(".principle-card")
        .getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
  await expect(page.locator(".mission-vision")).toContainText(
    "To deliver reliable and responsible energy",
  );
  await expect(page.locator(".mission-vision")).toContainText(
    "To become a globally trusted integrated energy company",
  );
  await expect(page.locator(".personality-grid > div")).toHaveCount(3);
  await expect(page.locator("#company-positioning")).not.toContainText("2050");
});
test("section navigation works on desktop and mobile without overflow", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Company positioning", exact: true })
    .click();
  await expect(page).toHaveURL(/#company-positioning$/);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Company positioning", exact: true })
    .click();
  await expect(page).toHaveURL(/#company-positioning$/);
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.goto("/");
  await page.screenshot({
    path: "/tmp/ojasvi-two-sections-mobile.png",
    fullPage: true,
  });
});
test("removed routes are unavailable and sitemap contains only the homepage", async ({
  request,
}) => {
  for (const path of [
    "/businesses",
    "/projects",
    "/investors",
    "/contact",
    "/news",
    "/careers",
  ])
    expect((await request.get(path)).status(), path).toBe(404);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect((sitemap.match(/<loc>/g) || []).length).toBe(1);
});
test("desktop and mobile pass automated WCAG 2.2 AA checks", async ({
  page,
}) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});
