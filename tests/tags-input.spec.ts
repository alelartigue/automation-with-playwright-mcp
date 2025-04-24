import { test, expect } from '@playwright/test';
import { TagsInputPage } from './pages/tags-input-page';

test.describe('Tags Input Box Tests', () => {
    let tagsPage: TagsInputPage;

    test.beforeEach(async ({ page }) => {
        tagsPage = new TagsInputPage(page);
        await tagsPage.goto();
    });

    test('should add a new tag and verify count', async () => {
        const initialCount = await tagsPage.getRemainingTagsCount();
        await tagsPage.addTag('playwright');
        
        // Verify the tag was added
        const tags = await tagsPage.getExistingTags();
        expect(tags).toContain('playwright');
        
        // Verify the count decreased by 1
        const newCount = await tagsPage.getRemainingTagsCount();
        expect(newCount).toBe(initialCount - 1);
    });
});
