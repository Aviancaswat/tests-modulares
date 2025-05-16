import { test } from '../utils/test-extends';

test.describe('página de avianca', () => {
    test('test flujos de avianca', async ({ page }) => {
        await page.configInitialTest();
        await page.homePageAvianca();
    });
});
