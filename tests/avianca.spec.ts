import { test } from '../utils/test-extends';

test.describe('página de avianca', () => {
    test('test flujos de avianca', async ({ page }) => {
        await page.moveMouseTo(100, 200);
        await page.configInitialTest();
        await page.moveMouseTo(100, 200);
        await page.homePageAvianca();
        await page.moveMouseTo(100, 200);
        await page.flightPageAvianca();
        await page.moveMouseTo(100, 200);
        await page.passengerPageAvianca();
    });
});
