import { test, expect } from "./fixtures/fixture";

test.describe('Dynamic Table', () => {

    test.beforeEach(async ({ dynamicTablePage }) => {
        await dynamicTablePage.goto();
     });

     test("Should display the Spiderman's name as $24.96", async ({ dynamicTablePage }) => {
        const spidermanNameDisplayed = await dynamicTablePage.getSuperHeroName(dynamicTablePage.spidermanImage);
        const expectedSpidermanName = 'Peter Parker';
        await expect(spidermanNameDisplayed).toBe(expectedSpidermanName);
     });
});