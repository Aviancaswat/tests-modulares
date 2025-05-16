# Test info

- Name: página de avianca >> test flujos de avianca
- Location: C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\tests\avianca.spec.ts:4:9

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#journeysContainerId_1').locator('.journey_price_fare-select_label-text').first()
    - locator resolved to <span _ngcontent-osf-c12="" class="journey_price_fare-select_label-text"> Seleccionar de tarifa </span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

    at Page.page.selectFlightReturns (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:174:92)
    at Page.page.flightPageAvianca (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:329:13)
    at C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\tests\avianca.spec.ts:12:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#maincontent"
- banner:
  - img "Common.LogoAltText"
- main:
  - region "Basket.Section_AriaLabel":
    - text: Barranquilla BAQ A Bogotá BOG  mié. 14 may. 2025  mar. 20 may. 2025
    - list:
      - text: 
      - listitem: 1 Adulto ,
      - listitem: 1 Joven ,
      - listitem: 1 Niño ,
      - listitem: 1 Bebé
    - button " Editar"
    - text: Paso 1 de 5
    - progressbar
    - button "Total  COP 0 "
  - region
  - heading "Ida :" [level=2]
  - heading " Barranquilla a Bogotá" [level=3]:
    - text:  Barranquilla
    - img "a"
    - text: Bogotá
  - text: 14mayo2025
  - button " Editar selección"
  - list:
    - listitem:
      - text:  13:25
      - img "a": 
      - text: 15:00 BAQ 1h 35m
      - button "Directo"
      - text: BOG
      - button "COP 322.815 basic"
      - text: Vuelo seleccionado
    - listitem
    - listitem
    - listitem
    - listitem
    - listitem
  - heading "Vuelta :" [level=2]
  - heading " Bogotá a Barranquilla" [level=3]:
    - text:  Bogotá
    - img "a"
    - text: Barranquilla
  - region "Schedule.PriceSelection_Section_AriaLabel":
    - list:
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": sáb. 17 may. COP 322.955
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": dom. 18 may. COP 322.955
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": lun. 19 may. COP 305.215
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel" [selected]: mar. 20 may. COP 305.215
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": mié. 21 may. COP 283.100
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": jue. 22 may. COP 283.100
      - listitem:
        - option "Schedule.A11y.CalendarDay.AriaLabel": vie. 23 may. COP 283.100
    - button "Departure day calendar click to see previous 3 days": 
    - button "Departure day calendar click to see next 3 days": 
  - region "Schedule.JourneyFilter_Section_AriaLabel":
    - text: "Filtrar por:"
    - list:
      - listitem: Mejor precio 
      - listitem: Vuelos directos 
  - list:
    - listitem:
      - text:  Mejor precio 06:00
      - img "a": 
      - text: 07:41 BOG 1h 41m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text: 07:26
      - img "a": 
      - text: 08:58 BOG 1h 32m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 347.705 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 09:10
      - img "a": 
      - text: 10:39 BOG 1h 29m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 10:41
      - img "a": 
      - text: 12:12 BOG 1h 31m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 12:24
      - img "a": 
      - text: 13:52 BOG 1h 28m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 14:30
      - img "a": 
      - text: 16:04 BOG 1h 34m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text: 17:00
      - img "a": 
      - text: 18:32 BOG 1h 32m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 347.705 Seleccionar de tarifa "
    - listitem:
      - text: 17:47
      - img "a": 
      - text: 19:23 BOG 1h 36m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 347.705 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 20:00
      - img "a": 
      - text: 21:29 BOG 1h 29m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 20:39
      - img "a": 
      - text: 22:05 BOG 1h 26m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 21:00
      - img "a": 
      - text: 22:31 BOG 1h 31m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text:  Mejor precio 22:07
      - img "a": 
      - text: 23:44 BOG 1h 37m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
  - button "Mostrar más vuelos"
  - heading "Condiciones tarifarias " [level=3]:
    - button "Condiciones tarifarias "
  - region:
    - paragraph:
      - strong: Cambios de vuelo
    - list:
      - listitem: "Diferencia de tarifa: es la diferencia en dinero entre la tarifa que compraste y la nueva que estás eligiendo (aplica para todas las tarifas)."
      - listitem: "Diferencias generadas por impuestos: aplican según las normativas vigentes de cada país."
      - listitem: "Cargo por cambio: son los cargos adicionales que se generan al cambiar tu vuelo de manera voluntaria (aplica únicamente para las tarifas basic, light y classic)."
    - table:
      - rowgroup:
        - row "Región Cargo":
          - cell "Región":
            - strong: Región
          - cell "Cargo":
            - strong: Cargo
        - row "Vuelos nacionales en Colombia 120.000 COP":
          - cell "Vuelos nacionales en Colombia":
            - strong: Vuelos nacionales en Colombia
          - cell "120.000 COP"
        - row "Vuelos nacionales en Ecuador 30 USD":
          - cell "Vuelos nacionales en Ecuador":
            - strong: Vuelos nacionales en Ecuador
          - cell "30 USD"
        - row "Vuelos internacionales al interior de Suramérica 185 USD":
          - cell "Vuelos internacionales al interior de Suramérica":
            - strong: Vuelos internacionales al interior de Suramérica
          - cell "185 USD"
        - row "Otros vuelos internacionales en las Américas y vuelos hacia Europa USD/CAD 210":
          - cell "Otros vuelos internacionales en las Américas y vuelos hacia Europa":
            - strong: Otros vuelos internacionales en las Américas y vuelos hacia Europa
          - cell "USD/CAD 210"
        - row "Desde Reino Unido GBP 150":
          - cell "Desde Reino Unido":
            - strong: Desde Reino Unido
          - cell "GBP 150"
        - row "Desde el resto de Europa EUR 180":
          - cell "Desde el resto de Europa":
            - strong: Desde el resto de Europa
          - cell "EUR 180"
    - list:
      - listitem: Para las tarifas flex y business se permiten cambios antes de salida del vuelo sin cargo por cambio, pero podrán aplicar cargos por diferencia de tarifa e impuestos.
    - paragraph:
      - strong: Reembolsos
    - list:
      - listitem: Aplica para las tarifas flex y business, antes del vuelo.
      - listitem: Los reembolsos después del vuelo no se permiten en ninguna tarifa, excepto ante eventos operacionales.
      - listitem: La condición de reembolso aplica sobre el valor pagado por la tarifa. Los impuestos serán reembolsados de acuerdo con las disposiciones legales aplicables.
      - listitem:
        - text: Los servicios adicionales que compres para tu reserva y decidas no utilizar, serán reembolsables
        - strong: únicamente si tu tarifa es flex o business.
        - text: Si los servicios no fueron prestados por causa imputable a la aerolínea, serán reembolsables para todas las tarifas.
      - listitem:
        - text: Consulta más información sobre el derecho de retracto, desistimiento y otras leyes según el país en nuestro
        - link "Centro de ayuda":
          - /url: https://ayuda.avianca.com/hc/es/articles/17061459607067
        - text: .
      - listitem: Estás obligado a utilizar todos los segmentos de tu itinerario según el plan de vuelo que contrataste. No puedes quedarte en la ciudad de conexión sin continuar hacia tu destino final. Si decides no completar tu itinerario, consideraremos que has completado el viaje desde el origen hasta el destino final programado, y no tendrás derecho a reembolso por los segmentos no volados, excepto por los impuestos y tasas no causadas correspondientes a esos segmentos.
    - paragraph:
      - strong: Experiencia a bordo
    - list:
      - listitem: La experiencia INSIGNIA by avianca en Business Class aplica únicamente para vuelos entre El Salvador o Colombia y Europa.
      - listitem: La reclinación máxima de los asientos en Business Class puede variar según el tipo de avión.
      - listitem: Asiento Business Class, Business Class (Flatbed) o Premium (de acuerdo al tipo de avión que opera la ruta) están incluidos para la tarifa business con todos sus beneficios.
    - paragraph:
      - strong: Vuelos operados por Clic Air S.A. con origen o conexión en Bogotá
    - list:
      - listitem:
        - text: Si tu vuelo es a través de nuestro
        - strong: código compartido
        - text: (vuelos dentro de los números 2900 a 2999), el día de tu viaje debes dirigirte al Terminal 2 (Puente Aéreo).
      - listitem:
        - text: Si tu vuelo no se encuentra dentro de estos números, será operado por Clic Air S.A. para
        - strong: avianca Express
        - text: y el día de tu viaje deberás dirigirte al Terminal 1 (Aeropuerto El Dorado). Estos vuelos no cuentan con servicio de venta a bordo.
    - paragraph:
      - strong: Acumulación Lifemiles
    - list:
      - listitem: El precio de la tarifa tomado para el cálculo de las millas no incluye tasas, impuestos o servicios adicionales.
      - listitem: Los socios elite acumulan millas adicionales, el bono elite aplica según el estatus que tenga cada socio. Para los diamond es de 80%, gold 60%, silver 20% y redplus 10%.
- contentinfo:
  - paragraph: Copyright © Avianca 2025
  - text: Consulta todas las condiciones de retracto y desistimiento aplicables para Colombia.
```

# Test source

```ts
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
  106 |             await page.locator('span').filter({ hasText: copys['fecha_salida'] }).click();
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
> 174 |             await containerVuelta.locator(".journey_price_fare-select_label-text").first().click();
      |                                                                                            ^ Error: locator.click: Test timeout of 60000ms exceeded.
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
  207 |                     "Perez",
  208 |                     "Martinez",
  209 |                     "Hernandez",
  210 |                     "Jones",
  211 |                     "Vega",
  212 |                     "Brown"
  213 |                 ];
  214 |
  215 |                 const emailsData: Array<string> = [
  216 |                     "monitoreo.digital@avianca.com"
  217 |                 ];
  218 |
  219 |                 const phoneNumbersData: Array<string> = [
  220 |                     "123456",
  221 |                     "987654",
  222 |                     "654321",
  223 |                     "321654",
  224 |                     "987123",
  225 |                     "456789",
  226 |                     "102938",
  227 |                     "112233",
  228 |                     "778899",
  229 |                     "334455"
  230 |                 ];
  231 |
  232 |                 const getDataRandom = (data: Array<string> = []): string => {
  233 |                     return data[Math.floor(Math.random() * data.length)];
  234 |                 }
  235 |
  236 |                 const getValueElement = (element: HTMLInputElement): string => {
  237 |                     let value: string | null = null;
  238 |                     if (element.name === "email") {
  239 |                         value = getDataRandom(emailsData);
  240 |                     }
  241 |                     else if (element.name === "phone_phoneNumberId") {
  242 |                         value = getDataRandom(phoneNumbersData);
  243 |                     }
  244 |                     else if (element.id.includes("IdFirstName")) {
  245 |                         value = getDataRandom(userNamesData);
  246 |                     }
  247 |                     else {
  248 |                         value = getDataRandom(lastNamesData);
  249 |                     }
  250 |                     return value;
  251 |                 }
  252 |
  253 |                 const setValuesDefaultAutoForm = async () => {
  254 |                     const elements = document.querySelectorAll('.ui-input');
  255 |                     Array.from(elements).forEach((element) => {
  256 |                         if (element.tagName === "BUTTON") {
  257 |                             const elementButton = element as HTMLButtonElement;
  258 |                             elementButton.click();
  259 |                             const listOptions = document.querySelector(".ui-dropdown_list");
  260 |                             (listOptions?.querySelector(".ui-dropdown_item>button") as HTMLButtonElement).click();
  261 |                         }
  262 |                         else if (element.tagName === "INPUT") {
  263 |                             const elementInput = element as HTMLInputElement;
  264 |                             const containers = document.querySelectorAll(".ui-input-container");
  265 |                             Array.from(containers).forEach(e => { e.classList.add("is-focused") });
  266 |                             let eventBlur: Event = new Event("blur");
  267 |                             let eventFocus: Event = new Event("focus");
  268 |                             elementInput.value = getValueElement(elementInput);
  269 |                             ['change', 'input'].forEach(event => {
  270 |                                 let handleEvent = new Event(event, { bubbles: true, cancelable: false });
  271 |                                 element.dispatchEvent(handleEvent);
  272 |                             });
  273 |                             element.dispatchEvent(eventFocus);
  274 |                             setTimeout(() => {
```