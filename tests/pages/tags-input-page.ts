import { Page } from '@playwright/test';

export class TagsInputPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://qaplayground.dev/apps/tags-input-box/');
    }

    async addTag(tagName: string) {
        await this.page.getByRole('textbox').fill(tagName);
        await this.page.keyboard.press('Enter');
    }

    async getTagsList() {
        return await this.page.locator('ul li').allInnerTexts();
    }

    async getRemainingTagsCount() {
        const countText = await this.page.locator('p:has-text("tags are remaining")').textContent();
        return parseInt(countText?.split(' ')[0] || '0');
    }

    async removeAllTags() {
        await this.page.getByRole('button', { name: 'Remove All' }).click();
    }
}
