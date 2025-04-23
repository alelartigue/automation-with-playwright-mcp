import { Page } from '@playwright/test';

export class TagsInputPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://qaplayground.dev/apps/tags-input-box/');
    }

    async addTag(tagName: string) {
        await this.page.getByRole('textbox').fill(tagName);
        await this.page.getByRole('textbox').press('Enter');
    }

    async getTagsList() {
        const tags = await this.page.locator('li').allTextContents();
        return tags.map(tag => tag.trim());
    }

    async getRemainingTagsCount() {
        const countText = await this.page.locator('p').filter({ hasText: 'tags are remaining' }).textContent();
        return parseInt(countText?.split(' ')[0] || '0');
    }
}
