import { Locator, Page } from '@playwright/test';

export class DynamicTablePage  {
  readonly page : Page
  readonly spidermanImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spidermanImage = page.getByRole('cell', { name: 'Spider-Man spider-man@' }).locator('img');
  }

  async goto() {
    await this.page.goto('/apps/dynamic-table');
  }

  async getSuperHeroName(superHeroImage: Locator) {
    return await superHeroImage.locator('//ancestor::tr/td[3]/span').textContent();
  }
}