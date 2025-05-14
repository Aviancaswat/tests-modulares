# Test info

- Name: página de avianca >> test flujos de avianca
- Location: C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\tests\avianca.spec.ts:4:9

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('id=BAQ')
    - locator resolved to <button id="BAQ" role="option" _ngcontent-mry-c16="" class="station-control-list_item_link">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable

    at Page.page.selectOriginFlight (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:77:66)
    at Page.page.homePageAvianca (C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\utils\test-extends.ts:276:13)
    at C:\Users\framir02\projects\avianca\automatizacion\playwright-modular\tests\avianca.spec.ts:6:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#maincontent"
- text: 
- paragraph:
  - text: Consulta las
  - link "nuevas exigencias":
    - /url: https://ayuda.avianca.com/hc/es/articles/36848347529755
  - text: de Certificado Internacional de Vacunación contra la Fiebre Amarilla para personas viajando hacia Ecuador y Costa Rica.
- button "Close alert": 
- banner:
  - link "avianca":
    - /url: /es/
    - img "avianca"
  - navigation "Main navigation":
    - list:
      - listitem:
        - link "Reservar":
          - /url: /es/
      - listitem:
        - button "Ofertas y destinos"
      - listitem:
        - button "Tu reserva Check-in"
      - listitem:
        - button "Información y ayuda"
      - listitem:
        - button "lifemiles"
  - link "Cuenta lifemiles":
    - /url: https://sso.lifemiles.com/auth/realms/lifemiles/protocol/openid-connect/auth?client_id=lifemiles&response_type=code&scope=openid&login_hint=wst&ui_locales=es&redirect_uri=https://www.lifemiles.com/oauth-signin/&state=1739822969470µsiteParams=%7B%27Access-Level%27%3A%20%270%27%2C%20%27Redirect-Uri%27%3A%20%27%27%7D&utm_source=avianca&utm_medium=referral&utm_campaign=button2_lifemiles
    - button "Cuenta lifemiles"
- main:
  - tabpanel:
    - tabpanel:
      - radio "Ida y vuelta" [checked]
      - text: Ida y vuelta
      - radio "Solo ida"
      - text: Solo ida
      - checkbox
      - text: Comparar vuelos con millas
      - link "Hoteles":
        - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_shortcut
        - button "Hoteles"
      - link "Autos":
        - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
        - button "Autos"
      - text: Origen  Origen
      - textbox "El foco se moverá al siguiente campo al seleccionar una opción": BAQ
      - text:  Destino
      - textbox "El foco se moverá al siguiente campo al seleccionar una opción"
      - listbox "Elige una ciudad de origen":
        - menuitem "Barranquilla ( Colombia ) BAQ":
          - option "Barranquilla ( Colombia ) BAQ"
      - list
      - text: Fechas  Ida
      - textbox "Search.Search_DepartDateFormatLabel dd/MM/yyyy": 17/05/2025
      - status: Search.Search_DepartDateSelectedLabel
      - text:  Vuelta
      - textbox "Search.Search_ReturnDateFormatLabel dd/MM/yyyy": 20/05/2025
      - status: Search.Search_ReturnDateSelectedLabel
      - text: Pasajeros 
      - button "Pasajeros :1": 1 
      - button "Buscar"
  - heading "¡Los destinos más buscados te llaman!" [level=1]
  - paragraph: ¡Apresúrate! Compra hasta el 19 de mayo, viaja hasta septiembre 2025 y duplica tus millas
  - paragraph: Por trayecto desde COP 92.600
  - text: 
  - link "Compra ya":
    - /url: /es/ofertas-destinos/ofertas-de-vuelos/
  - heading "Ofertas desde" [level=2]:
    - heading "Ofertas desde" [level=2]
    - 'combobox "Seleccionar ciudad: Bogotá is selected"': 
  - list:
    - listitem:
      - link "Medellín COP 120.000 Por trayecto desde"
    - listitem:
      - link "Pereira COP 120.000 Por trayecto desde"
    - listitem:
      - link "Cali COP 121.200 Por trayecto desde"
  - link "Descubrir más ofertas ":
    - /url: /es/ofertas-y-promociones/ofertas-de-vuelos/
  - heading "Prepárate para viajar" [level=2]
  - button "Check-in online Obtén tu pase de abordar y ahorra tiempo en el aeropuerto.":
    - heading "Check-in online" [level=3]
    - text: Obtén tu pase de abordar y ahorra tiempo en el aeropuerto.
  - button "Centro de ayuda Busca y encuentra información útil para resolver tus preguntas.":
    - heading "Centro de ayuda" [level=3]
    - text: Busca y encuentra información útil para resolver tus preguntas.
  - button "Requisitos para viajar Infórmate acerca de visas, vacunas y demás documentos.":
    - heading "Requisitos para viajar" [level=3]
    - text: Infórmate acerca de visas, vacunas y demás documentos.
  - heading "Conoce las novedades de lifemiles" [level=2]
  - text: Suscríbete a lifemiles+ y recibe un descuento exclusivo al redimir tiquetes con avianca
  - link "Suscríbete ya":
    - /url: https://www.lifemiles.com/landing/clublm?utm_source=avianca&utm_medium=referral&utm_campaign=banner_secundario
    - strong: Suscríbete ya
  - text: Hasta 20,000 millas de bienvenida con tu tarjeta de crédito
  - link "Aplica ya":
    - /url: https://www.lifemiles.com/credit-card/get-credit-card?utm_source=avianca&utm_medium=referral&utm_campaign=banner_secundario
    - strong: Aplica ya
  - text: ¡Suscríbete y gana el doble! 2x1 en millas en rutas seleccionadas
  - link "Suscríbete":
    - /url: https://www.lifemiles.com/bonus-subscription2x1/es/wr/MILLAS2X?&utm_source=avianca&utm_medium=referral&utm_campaign=GL_Monday0505_2Xmillas_home
    - strong: Suscríbete
  - heading "Más información de interés" [level=2]
  - button "Experiencia avianca ¡Listo para despegar! Descubre los servicios a bordo que te ofrecemos al volar con nosotros.":
    - heading "Experiencia avianca" [level=3]
    - text: ¡Listo para despegar! Descubre los servicios a bordo que te ofrecemos al volar con nosotros.
  - button "Equipaje Entérate de las condiciones que debes tener en cuenta al momento de preparar tu equipaje.":
    - heading "Equipaje" [level=3]
    - text: Entérate de las condiciones que debes tener en cuenta al momento de preparar tu equipaje.
  - button "Unidos contra el fraude Protege tu viaje comprando tus tiquetes y servicios adicionales en nuestros canales oficiales.":
    - heading "Unidos contra el fraude" [level=3]
    - text: Protege tu viaje comprando tus tiquetes y servicios adicionales en nuestros canales oficiales.
  - button "Inspírate Explora nuestros destinos y planea tu próxima aventura. Sácale provecho a tu siguiente vuelo.":
    - heading "Inspírate" [level=3]
    - text: Explora nuestros destinos y planea tu próxima aventura. Sácale provecho a tu siguiente vuelo.
  - heading "Complementa tu experiencia" [level=2]
  - heading "Reserva de hoteles" [level=3]
  - text: Cientos de alojamientos con hasta 15% DCTO te esperan en
  - link "Booking.com.":
    - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_banner_experiencia
  - heading "Alquiler de autos" [level=3]
  - text: Movilízate a tu ritmo con hasta 15% DCTO en tu próximo destino con
  - link "Rentalcars.com.":
    - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
  - heading "Tours y excursiones" [level=3]
  - text: Descubre actividades en los principales destinos turísticos del mundo con
  - link "Civitatis.":
    - /url: https://avianca.civitatis.com/es/
  - heading "Todo en una sola reserva" [level=3]
  - text: Muy pronto podrás comprar tus tiquetes aéreos + alojamiento, auto y más en un solo lugar.
- contentinfo "Site":
  - link "avianca":
    - /url: /es/
    - img "avianca logo"
  - heading "¿Estás buscando ofertas?" [level=3]
  - paragraph: Suscríbete y sé el primero en recibir ofertas personalizadas en tu correo.
  - textbox "correo@mail.com"
  - button "Suscríbete"
  - paragraph:
    - text: Al suscribirme acepto la
    - link "Política de Privacidad":
      - /url: /es/informacion-legal/politica-privacidad/
    - text: y el uso de mis datos personales para recibir ofertas.
  - region:
    - paragraph: ¡Síguenos!
    - list:
      - listitem:
        - link " twitter":
          - /url: https://twitter.com/avianca
      - listitem:
        - link " facebook":
          - /url: https://es-la.facebook.com/AviancaGlobal/
      - listitem:
        - link " youtube":
          - /url: https://www.youtube.com/user/aviancachannel
      - listitem:
        - link " instagram":
          - /url: https://www.instagram.com/avianca/?hl=es-la
  - heading "Descubre y compra" [level=2]:
    - button "Descubre y compra" [expanded]
  - list "Descubre y compra":
    - listitem:
      - link "Vuelos baratos":
        - /url: /es/ofertas-destinos/ofertas-de-vuelos/
    - listitem:
      - link "Reservas de hoteles":
        - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_shortcut
    - listitem:
      - link "Alquiler de autos":
        - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
    - listitem:
      - link "Tours y excursiones":
        - /url: https://avianca.civitatis.com/es/
    - listitem:
      - link "Asistencia en viaje":
        - /url: https://ayuda.avianca.com/hc/es/articles/13523002282651
    - listitem:
      - link "avianca connect":
        - /url: https://connect.avianca.com/es
  - button "Sobre nosotros" [expanded]
  - list "Sobre nosotros":
    - listitem:
      - link "Somos avianca":
        - /url: /es/sobre-nosotros/somos-avianca/
    - listitem:
      - link "Trabaja con nosotros":
        - /url: https://jobs.avianca.com/?_ga=2.159730301.1902998134.1534167185-1083287843.1533248002/
    - listitem:
      - link "Noticias corporativas":
        - /url: /es/sobre-nosotros/noticias-corporativas/
    - listitem:
      - link "Alianzas y beneficios":
        - /url: /es/sobre-nosotros/alianzas-y-beneficios/
    - listitem:
      - link "Sostenibilidad":
        - /url: /es/sobre-nosotros/sostenibilidad/
    - listitem:
      - link "Plan de accesibilidad":
        - /url: /es/sobre-nosotros/somos-avianca/accesibilidad-e-inclusion/
  - button "Nuestros portales" [expanded]
  - list "Nuestros portales":
    - listitem:
      - link "Programa lifemiles":
        - /url: https://www.lifemiles.com/?utm_source=avianca&utm_medium=referral&utm_campaign=footer
    - listitem:
      - link "avianca empresas":
        - /url: https://empresas.avianca.com/
    - listitem:
      - link "aviancadirect":
        - /url: /es/portales-aliados/aviancadirect-ndc/
    - listitem:
      - link "avianca trade":
        - /url: https://aviancatrade.zendesk.com/hc/es
    - listitem:
      - link "avianca cargo":
        - /url: https://www.aviancacargo.com//indexes.aspx
    - listitem:
      - link "Relación con inversionistas":
        - /url: https://ir.avianca.com/
  - button "Enlaces rápidos" [expanded]
  - list "Enlaces rápidos":
    - listitem:
      - link "Información legal":
        - /url: /es/informacion-legal/informacion-legal/
    - listitem:
      - link "Política de privacidad":
        - /url: /es/informacion-legal/politica-privacidad/
    - listitem:
      - link "Contrato de transporte":
        - /url: /es/informacion-legal/contrato-de-transporte/
    - listitem:
      - link "Artículos restringidos":
        - /url: https://ayuda.avianca.com/hc/es/sections/13499643885467
    - listitem:
      - link "Plan de contingencia":
        - /url: /es/informacion-legal/plan-de-contingencia/
    - listitem:
      - link "Contáctanos":
        - /url: /es/sobre-nosotros/contactanos/
    - listitem:
      - link "Factura electrónica":
        - /url: https://ayuda.avianca.com/hc/es/articles/15398664877723
  - paragraph: Copyright © Avianca 2025
  - list:
    - listitem:
      - img "eCommerce Award"
    - listitem:
      - link "Logo Aeronáutica Civil":
        - /url: https://www.aerocivil.gov.co/
        - img "Logo Aeronáutica Civil"
    - listitem:
      - link "Logo Star Alliance":
        - /url: https://www.staralliance.com/
        - img "Logo Star Alliance"
  - link "Powered by":
    - /url: http://newshore.es
- button " Scroll Back To Top"
- region "Consentimiento de cookies":
  - alertdialog "Consentimiento de cookies":
    - heading "Consentimiento de cookies" [level=2]
    - text: En avianca utilizamos cookies propias y de terceros con fines analíticos y a fin de garantizar la funcionalidad de la web, mejorar tu experiencia y mostrar publicidad relacionada con tus preferencias. Puedes "Aceptar" o seleccionar aquellas que quieras en "Configurar cookies". Para conocer más, consulta nuestra
    - link "Política de cookies, se abre en una nueva pestaña":
      - /url: https://www.avianca.com/es/informacion-legal/politica-de-cookies/
      - text: Política de cookies.
    - button "Configurar cookies"
    - button "Aceptar"
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
   24 |             const timestamp = page.getTimestamp();
   25 |             const name = `step${step}-${label}-${timestamp}.png`;
   26 |             const buffer = await page.screenshot({ path: `./images-tests/${name}` });
   27 |             await testInfo.attach(`${label} (${timestamp})`, {
   28 |                 body: buffer,
   29 |                 contentType: 'image/png',
   30 |             });
   31 |         };
   32 |
   33 |         page.verifyCookies = async (): Promise<void> => {
   34 |             const consentBtn = page.locator('#onetrust-pc-btn-handler');
   35 |             if (await consentBtn.isVisible()) {
   36 |                 await consentBtn.click();
   37 |                 await page.locator('.save-preference-btn-handler.onetrust-close-btn-handler').click();
   38 |             }
   39 |         }
   40 |
   41 |         page.getLangPage = async (): Promise<Lang> => {
   42 |             const responseLang = await page.evaluate(() => {
   43 |                 const lang = document.querySelector("html")?.getAttribute("lang")?.toLowerCase();
   44 |                 if (lang?.includes("-")) {
   45 |                     return lang.split("-")[1].toLowerCase();
   46 |                 }
   47 |                 return lang;
   48 |             }) as Lang;
   49 |
   50 |             return responseLang;
   51 |         }
   52 |
   53 |         page.isElementPresent = async (selector: string): Promise<boolean> => {
   54 |             return await page.locator(selector).isVisible();
   55 |         }
   56 |
   57 |         page.selectElementDOM = async (selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
   58 |             return await page.$(selector);
   59 |         }
   60 |
   61 |         page.selectButtonAndClick = async (selector: string): Promise<void> => {
   62 |             const elementPresent = await page.isElementPresent(selector);
   63 |             if (elementPresent) {
   64 |                 await expect(page.locator(selector)).toBeVisible();
   65 |                 await page.locator(selector).click();
   66 |             }
   67 |         }
   68 |
   69 |         page.selectOriginFlight = async (): Promise<void> => {
   70 |             const currentLang = await page.getLangPage();
   71 |             await expect(page.locator('.content-wrap')).toBeVisible();
   72 |             await expect(page.locator('#originBtn')).toBeVisible();
   73 |             const origen = page.getByPlaceholder((copys[currentLang]).origen);
   74 |             await page.locator('button#originBtn').click();
   75 |             await origen.fill(copys['ciudad_origen']);
   76 |             await origen.press('Enter');
>  77 |             await (page.locator('id=' + copys['ciudad_origen'])).click();
      |                                                                  ^ Error: locator.click: Test timeout of 60000ms exceeded.
   78 |         }
   79 |
   80 |         page.selectDestinationFlight = async (): Promise<void> => {
   81 |             const currentLang = await page.getLangPage();
   82 |             const destino = page.getByPlaceholder(copys[currentLang].destino);
   83 |             await destino.click();
   84 |             await destino.fill(copys['ciudad_destino']);
   85 |             await destino.press('Enter');
   86 |             await (page.locator('id=' + copys['ciudad_destino'])).click();
   87 |         }
   88 |
   89 |         page.selectDateInitFlight = async (): Promise<void> => {
   90 |             await expect(page.locator('id=departureInputDatePickerId')).toBeVisible();
   91 |             const fechaIda = await page.locator('id=departureInputDatePickerId');
   92 |             fechaIda.click();
   93 |             await expect(page.locator('span').filter({ hasText: copys['fecha_salida'] })).toBeVisible();
   94 |             await page.locator('span').filter({ hasText: copys['fecha_salida'] }).click();
   95 |         }
   96 |
   97 |         page.selectDateEndFlight = async (): Promise<void> => {
   98 |             await expect(page.locator('span').filter({ hasText: copys['fecha_llegada'] })).toBeVisible();
   99 |             await page.locator('span').filter({ hasText: copys['fecha_llegada'] }).click();
  100 |         }
  101 |
  102 |         page.selectPassengers = async (): Promise<void> => {
  103 |             await page.waitForTimeout(300);
  104 |             await page.getByRole('button', { name: '' }).nth(1).click();
  105 |             await page.getByRole('button', { name: '' }).nth(2).click();
  106 |             await page.getByRole('button', { name: '' }).nth(3).click();
  107 |             const confirmar = await page.locator('div#paxControlSearchId > div > div:nth-of-type(2) > div > div > button')
  108 |             confirmar.click();
  109 |         }
  110 |
  111 |         page.selectCheckWayReturn = async (): Promise<void> => {
  112 |             const wayReturn = page.locator("#journeytypeId_0");
  113 |             await expect(wayReturn).toBeVisible();
  114 |             await wayReturn.scrollIntoViewIfNeeded();
  115 |             wayReturn.click();
  116 |         }
  117 |
  118 |         page.selectCheckOneWay = async (): Promise<void> => {
  119 |             const oneWay = page.locator("#journeytypeId_1");
  120 |             await expect(oneWay).toBeVisible();
  121 |             await oneWay.scrollIntoViewIfNeeded();
  122 |             oneWay.click();
  123 |         }
  124 |
  125 |         page.validateModalSelectionFlight = async (): Promise<void> => {
  126 |             await page.waitForTimeout(1500);
  127 |             const isVisibleModal = await page.locator("#FB310").first().isVisible();
  128 |             if (isVisibleModal) {
  129 |                 await expect(page.locator(".cro-button.cro-no-accept-upsell-button")).toBeVisible();
  130 |                 await page.locator(".cro-button.cro-no-accept-upsell-button").first().click();
  131 |             }
  132 |         }
  133 |
  134 |         page.selectFlightsOneWay = async (): Promise<void> => {
  135 |             await page.waitForSelector(".journey_price_fare-select_label-text", { timeout: 60_000 });
  136 |             await expect(page.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
  137 |             await page.locator('.journey_price_fare-select_label-text').first().click();
  138 |             await page.waitForSelector(".journey_fares");
  139 |             await page.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
  140 |             await page.validateModalSelectionFlight();
  141 |         }
  142 |
  143 |         page.selectFlightReturns = async (): Promise<void> => {
  144 |             await page.waitForSelector("#journeysContainerId_1", { timeout: 20000 });
  145 |             const containerVuelta = page.locator("#journeysContainerId_1");
  146 |             await expect(containerVuelta).toBeVisible();
  147 |             await expect(containerVuelta.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
  148 |             await containerVuelta.locator(".journey_price_fare-select_label-text").first().click();
  149 |             await page.takeScreenshot('seleccion-vuelo-regreso');
  150 |             await containerVuelta.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
  151 |             await page.validateModalSelectionFlight();
  152 |         }
  153 |
  154 |         page.fillFieldsPassenger = async (): Promise<void> => {
  155 |             await page.waitForSelector(".passenger_data_group");
  156 |             await page.evaluate(() => {
  157 |                 const userNamesData: Array<string> = [
  158 |                     "john doe",
  159 |                     "jane smith",
  160 |                     "alexander wilson",
  161 |                     "maria gomez",
  162 |                     "roberto perez",
  163 |                     "lucia martinez",
  164 |                     "david hernandez",
  165 |                     "carla jones",
  166 |                     "luis vega",
  167 |                     "susan brown"
  168 |                 ];
  169 |
  170 |                 const lastNamesData: Array<string> = [
  171 |                     "Doe",
  172 |                     "Smith",
  173 |                     "Wilson",
  174 |                     "Gomez",
  175 |                     "Perez",
  176 |                     "Martinez",
  177 |                     "Hernandez",
```