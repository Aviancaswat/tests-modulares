import { test } from '../utils/test-extends';

test.describe('página de avianca', () => {
    test('test flujos de avianca', async ({ page }) => {
        //configuración inicial
        await page.configInitialTest();
        await page.homePageAvianca();
        await page.flightPageAvianca();
        await page.passengerPageAvianca();
    });
});
