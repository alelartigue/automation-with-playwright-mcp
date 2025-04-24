import { test, expect } from '@playwright/test';
import { TagsInputPage } from './pages/tags-input-page';

test.describe('Tags Input Box Tests', () => {
    let tagsInputPage: TagsInputPage;

    test.beforeEach(async ({ page }) => {
        tagsInputPage = new TagsInputPage(page);
        await tagsInputPage.goto();
    });

    test('should add a new tag and verify count', async () => {
        // Get initial count
        const initialCount = await tagsInputPage.getRemainingTagsCount();
        
        // Add a new tag
        await tagsInputPage.addTag('python');

        // Verify tag was added
        const tags = await tagsInputPage.getTagsList();
        expect(tags).toContain('python');

        // Verify count decreased by 1
        const newCount = await tagsInputPage.getRemainingTagsCount();
        expect(newCount).toBe(initialCount - 1);
    });
});
