import { DynamicTablePage } from "../pages/dynamic-table-page";
import { test as base } from '@playwright/test';


type MyFixtures = {
    dynamicTablePage: DynamicTablePage;
};

export const test = base.extend<MyFixtures>({
    dynamicTablePage: async ({ page }, use) => {
        const dynamicTablePage = new DynamicTablePage(page);
        await use(dynamicTablePage);
    }
});

export { expect } from '@playwright/test';