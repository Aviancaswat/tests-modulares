# Test info

- Name: página de avianca >> test flujos de avianca
- Location: C:\Users\framir02\projects\avianca\prueba-modular\test-modular\tests\avianca.spec.ts:4:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('span').filter({ hasText: 'may 14' })
    - locator resolved to <span _ngcontent-lkp-c18="" class="custom-day date-picker-day--layout-default ng-star-inserted">…</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="gridcell" aria-label="14-5-2025" class="ngb-dp-day disabled ng-star-inserted">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="gridcell" aria-label="14-5-2025" class="ngb-dp-day disabled ng-star-inserted">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    7 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="gridcell" aria-label="14-5-2025" class="ngb-dp-day disabled ng-star-inserted">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable

    at Page.page.selectDateInitFlight (C:\Users\framir02\projects\avianca\prueba-modular\test-modular\utils\test-extends.ts:106:83)
    at Page.page.homePageAvianca (C:\Users\framir02\projects\avianca\prueba-modular\test-modular\utils\test-extends.ts:338:13)
    at C:\Users\framir02\projects\avianca\prueba-modular\test-modular\tests\avianca.spec.ts:8:9
```

# Test source

```ts
   6 |     page: async ({ page }, use, testInfo) => {
   7 |         //#region métodos para flujos de la página de avianca
   8 |         let step = 0;
   9 |
   10 |         page.getTimestamp = (): string => {
   11 |             const now = new Date();
   12 |             const pad = (n: number) => n.toString().padStart(2, '0');
   13 |             const dd = pad(now.getDate());
   14 |             const mm = pad(now.getMonth() + 1);
   15 |             const yyyy = now.getFullYear();
   16 |             const hh = pad(now.getHours());
   17 |             const mi = pad(now.getMinutes());
   18 |             const ss = pad(now.getSeconds());
   19 |             return `fecha-${dd}-${mm}-${yyyy}_hora-${hh}-${mi}-${ss}`;
   20 |         }
   21 |
   22 |         page.takeScreenshot = async (label: string): Promise<void> => {
   23 |             step++;
   24 |
   25 |             const timestamp = page.getTimestamp();
   26 |             const name = `step${step}-${label}-${timestamp}.png`;
   27 |             const buffer = await page.screenshot({ path: `./images-tests/${name}` });
   28 |             await page.moveMouseTo(100, 200);
   29 |             await testInfo.attach(`${label} (${timestamp})`, {
   30 |                 body: buffer,
   31 |                 contentType: 'image/png',
   32 |             });
   33 |         };
   34 |
   35 |         page.verifyCookies = async (): Promise<void> => {
   36 |             await page.moveMouseTo(100, 200);
   37 |
   38 |             const consentBtn = page.locator('#onetrust-pc-btn-handler');
   39 |             if (await consentBtn.isVisible()) {
   40 |                 await consentBtn.click();
   41 |                 await page.locator('.save-preference-btn-handler.onetrust-close-btn-handler').click();
   42 |             }
   43 |         }
   44 |
   45 |         page.getLangPage = async (): Promise<Lang> => {
   46 |             const responseLang = await page.evaluate(() => {
   47 |                 const lang = document.querySelector("html")?.getAttribute("lang")?.toLowerCase();
   48 |                 if (lang?.includes("-")) {
   49 |                     return lang.split("-")[1].toLowerCase();
   50 |                 }
   51 |                 return lang;
   52 |             }) as Lang;
   53 |
   54 |             return responseLang;
   55 |         }
   56 |
   57 |         page.isElementPresent = async (selector: string): Promise<boolean> => {
   58 |             return await page.locator(selector).isVisible();
   59 |         }
   60 |
   61 |         page.selectElementDOM = async (selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
   62 |             return await page.$(selector);
   63 |         }
   64 |
   65 |         page.selectButtonAndClick = async (selector: string): Promise<void> => {
   66 |             await page.moveMouseTo(100, 200);
   67 |
   68 |             const elementPresent = await page.isElementPresent(selector);
   69 |             if (elementPresent) {
   70 |                 await expect(page.locator(selector)).toBeVisible();
   71 |                 await page.locator(selector).click();
   72 |             }
   73 |         }
   74 |
   75 |         page.selectOriginFlight = async (): Promise<void> => {
   76 |             await page.moveMouseTo(100, 200);
   77 |
   78 |             const currentLang = await page.getLangPage();
   79 |             await expect(page.locator('.content-wrap')).toBeVisible();
   80 |             await expect(page.locator('#originBtn')).toBeVisible();
   81 |             const origen = page.getByPlaceholder((copys[currentLang]).origen);
   82 |             await page.locator('button#originBtn').click();
   83 |             await origen.fill(copys['ciudad_origen']);
   84 |             await origen.press('Enter');
   85 |             await (page.locator('id=' + copys['ciudad_origen'])).click();
   86 |         }
   87 |
   88 |         page.selectDestinationFlight = async (): Promise<void> => {
   89 |             await page.moveMouseTo(100, 200);
   90 |
   91 |             const currentLang = await page.getLangPage();
   92 |             const destino = page.getByPlaceholder(copys[currentLang].destino);
   93 |             await destino.click();
   94 |             await destino.fill(copys['ciudad_destino']);
   95 |             await destino.press('Enter');
   96 |             await (page.locator('id=' + copys['ciudad_destino'])).click();
   97 |         }
   98 |
   99 |         page.selectDateInitFlight = async (): Promise<void> => {
  100 |             await page.moveMouseTo(100, 200);
  101 |
  102 |             await expect(page.locator('id=departureInputDatePickerId')).toBeVisible();
  103 |             const fechaIda = await page.locator('id=departureInputDatePickerId');
  104 |             fechaIda.click();
  105 |             await expect(page.locator('span').filter({ hasText: copys['fecha_salida'] })).toBeVisible();
> 106 |             await page.locator('span').filter({ hasText: copys['fecha_salida'] }).click();
      |                                                                                   ^ Error: locator.click: Target page, context or browser has been closed
  107 |         }
  108 |
  109 |         page.selectDateEndFlight = async (): Promise<void> => {
  110 |             await page.moveMouseTo(100, 200);
  111 |
  112 |             await expect(page.locator('span').filter({ hasText: copys['fecha_llegada'] })).toBeVisible();
  113 |             await page.locator('span').filter({ hasText: copys['fecha_llegada'] }).click();
  114 |         }
  115 |
  116 |         page.selectPassengers = async (): Promise<void> => {
  117 |             await page.moveMouseTo(100, 200);
  118 |
  119 |             await page.waitForTimeout(300);
  120 |             await page.getByRole('button', { name: '' }).nth(1).click();
  121 |             await page.getByRole('button', { name: '' }).nth(2).click();
  122 |             await page.getByRole('button', { name: '' }).nth(3).click();
  123 |             const confirmar = await page.locator('div#paxControlSearchId > div > div:nth-of-type(2) > div > div > button')
  124 |             confirmar.click();
  125 |         }
  126 |
  127 |         page.selectCheckWayReturn = async (): Promise<void> => {
  128 |             await page.moveMouseTo(100, 200);
  129 |
  130 |             const wayReturn = page.locator("#journeytypeId_0");
  131 |             await expect(wayReturn).toBeVisible();
  132 |             await wayReturn.scrollIntoViewIfNeeded();
  133 |             wayReturn.click();
  134 |         }
  135 |
  136 |         page.selectCheckOneWay = async (): Promise<void> => {
  137 |             await page.moveMouseTo(100, 200);
  138 |
  139 |             const oneWay = page.locator("#journeytypeId_1");
  140 |             await expect(oneWay).toBeVisible();
  141 |             await oneWay.scrollIntoViewIfNeeded();
  142 |             oneWay.click();
  143 |         }
  144 |
  145 |         page.validateModalSelectionFlight = async (): Promise<void> => {
  146 |             await page.moveMouseTo(100, 200);
  147 |
  148 |             await page.waitForTimeout(1500);
  149 |             const isVisibleModal = await page.locator("#FB310").first().isVisible();
  150 |             if (isVisibleModal) {
  151 |                 await expect(page.locator(".cro-button.cro-no-accept-upsell-button")).toBeVisible();
  152 |                 await page.locator(".cro-button.cro-no-accept-upsell-button").first().click();
  153 |             }
  154 |         }
  155 |
  156 |         page.selectFlightsOneWay = async (): Promise<void> => {
  157 |             await page.moveMouseTo(100, 200);
  158 |
  159 |             await page.waitForSelector(".journey_price_fare-select_label-text", { timeout: 60_000 });
  160 |             await expect(page.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
  161 |             await page.locator('.journey_price_fare-select_label-text').first().click();
  162 |             await page.waitForSelector(".journey_fares");
  163 |             await page.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
  164 |             await page.validateModalSelectionFlight();
  165 |         }
  166 |
  167 |         page.selectFlightReturns = async (): Promise<void> => {
  168 |             await page.moveMouseTo(100, 200);
  169 |             await page.moveMouseTo(100, 200);
  170 |             await page.waitForSelector("#journeysContainerId_1", { timeout: 20000 });
  171 |             const containerVuelta = page.locator("#journeysContainerId_1");
  172 |             await expect(containerVuelta).toBeVisible();
  173 |             await expect(containerVuelta.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
  174 |             await containerVuelta.locator(".journey_price_fare-select_label-text").first().click();
  175 |             await page.takeScreenshot('seleccion-vuelo-regreso');
  176 |             await containerVuelta.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
  177 |             await page.validateModalSelectionFlight();
  178 |         }
  179 |
  180 |         page.moveMouseTo = async (x: number, y: number): Promise<void> => {
  181 |             await page.mouse.move(x, y, { steps: 20 });
  182 |             await page.keyboard.press('ArrowDown');
  183 |             await page.waitForTimeout(1000); // simula que el usuario piensa
  184 |         }
  185 |
  186 |         page.fillFieldsPassenger = async (): Promise<void> => {
  187 |             await page.waitForSelector(".passenger_data_group");
  188 |             await page.evaluate(() => {
  189 |                 const userNamesData: Array<string> = [
  190 |                     "john doe",
  191 |                     "jane smith",
  192 |                     "alexander wilson",
  193 |                     "maria gomez",
  194 |                     "roberto perez",
  195 |                     "lucia martinez",
  196 |                     "david hernandez",
  197 |                     "carla jones",
  198 |                     "luis vega",
  199 |                     "susan brown"
  200 |                 ];
  201 |
  202 |                 const lastNamesData: Array<string> = [
  203 |                     "Doe",
  204 |                     "Smith",
  205 |                     "Wilson",
  206 |                     "Gomez",
```