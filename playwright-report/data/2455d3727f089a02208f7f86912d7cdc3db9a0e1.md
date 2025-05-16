# Test info

- Name: página de avianca >> test flujos de avianca
- Location: C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\tests\avianca.spec.ts:4:9

# Error details

```
Error: page.screenshot: Test timeout of 60000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

    at Page.takeScreenshot (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:27:39)
    at Page.page.selectFlightReturns (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:175:24)
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
      - listitem: Vuelos directos 
  - list:
    - listitem:
      - text:  Mejor precio 06:00
      - img "a": 
      - text: 07:41 BOG 1h 41m
      - button "Directo"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
      - heading "Elige cómo quieres volar" [level=3]
      - button "Click to select basic fare":
        - text: basic
        - list:
          - listitem:  1 artículo personal (bolso)
          - listitem:  Acumula 3 lifemiles por cada USD
          - listitem:  Equipaje de mano (10 kg)
          - listitem:  Equipaje de bodega (23 kg)
          - listitem:  Check-in en aeropuerto
          - listitem:  Selección de asientos
          - listitem:  Menú a bordo
          - listitem:  Cambios (antes del vuelo)
          - listitem:  Reembolso
        - button "Seleccionar"
        - text: Precio por pasajero
      - button "Click to select classic fare":
        - text: classic Recomendada
        - list:
          - listitem:  1 artículo personal (bolso)
          - listitem:  1 equipaje de mano (10 kg)
          - listitem:  1 equipaje de bodega (23 kg)
          - listitem:  Check-in en aeropuerto
          - listitem:  Asiento Economy incluido
          - listitem:  Acumula 6 lifemiles por cada USD
          - listitem:  Menú a bordo
          - listitem:  Cambios (antes del vuelo)
          - listitem:  Reembolso
        - button "Seleccionar"
        - text: Precio por pasajero
      - button "Click to select flex fare":
        - text: flex
        - list:
          - listitem:  1 artículo personal (bolso)
          - listitem:  1 equipaje de mano (10 kg)
          - listitem:  1 equipaje de bodega (23 kg)
          - listitem:  Check-in en aeropuerto
          - listitem:  Asiento Plus (sujeto a disponibilidad)
          - listitem:  Acumula 8 lifemiles por cada USD
          - listitem:  Cambios (antes del vuelo)
          - listitem:  Reembolso (antes del vuelo)
          - listitem:  Menú a bordo
        - button "Seleccionar"
        - text: Precio por pasajero
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
    - listitem:
      - text:  Mejor precio 09:40
      - img "a": 
      - text: 13:30 BOG 3h 50m
      - button "1 Parada"
      - text: BAQ
      - button "Desde COP 305.215 Seleccionar de tarifa "
    - listitem:
      - text: 15:09
      - img "a": 
      - text: 18:12 BOG 3h 3m
      - button "1 Parada"
      - text: BAQ
      - button "Desde COP 392.565 Seleccionar de tarifa "
    - listitem:
      - text: 22:20
      - img "a": 
      - text: 01:34 +1 Día BOG 3h 14m
      - button "1 Parada"
      - text: BAQ
      - button "Desde COP 328.815 Seleccionar de tarifa "
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
   1 | import { test as base, ElementHandle, expect } from '@playwright/test';
   2 | import type { Lang } from '../types/aviancaTypes';
   3 | import { copys } from '../data/copys';
   4 |
   5 | export const test = base.extend({
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
>  27 |             const buffer = await page.screenshot({ path: `./images-tests/${name}` });
      |                                       ^ Error: page.screenshot: Test timeout of 60000ms exceeded.
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
```