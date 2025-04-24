import { Page, Locator, expect } from '@playwright/test';

export class TagsInputPage {
    readonly page: Page;
    readonly inputBox: Locator;
    readonly tagsList: Locator;
    readonly remainingTagsCount: Locator;
    readonly removeAllButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputBox = page.getByRole('textbox');
        this.tagsList = page.locator('ul li');
        this.remainingTagsCount = page.locator('p:has-text("tags are remaining")');
        this.removeAllButton = page.getByRole('button', { name: 'Remove All' });
    }

    async goto() {
        await this.page.goto('https://qaplayground.dev/apps/tags-input-box/');
    }

    async addTag(tagName: string) {
        await this.inputBox.fill(tagName);
        await this.inputBox.press('Enter');
    }

    async getRemainingTagsCount(): Promise<number> {
        const countText = await this.remainingTagsCount.textContent();
        return parseInt(countText?.split(' ')[0] || '0');
    }

    async getExistingTags(): Promise<string[]> {
        return await this.tagsList.allTextContents();
    }

    async removeAllTags() {
        await this.removeAllButton.click();
    }
}
