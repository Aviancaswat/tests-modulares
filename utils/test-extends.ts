import { test as base, ElementHandle, expect } from '@playwright/test';
import type { Lang } from '../types/aviancaTypes';
import { copys } from '../data/copys';

export const test = base.extend({
    page: async ({ page }, use, testInfo) => {
        //#region métodos para flujos de la página de avianca
        let step = 0;

        page.getTimestamp = (): string => {
            const now = new Date();
            const pad = (n: number) => n.toString().padStart(2, '0');
            const dd = pad(now.getDate());
            const mm = pad(now.getMonth() + 1);
            const yyyy = now.getFullYear();
            const hh = pad(now.getHours());
            const mi = pad(now.getMinutes());
            const ss = pad(now.getSeconds());
            return `fecha-${dd}-${mm}-${yyyy}_hora-${hh}-${mi}-${ss}`;
        }

        page.takeScreenshot = async (label: string): Promise<void> => {
            step++;

            const timestamp = page.getTimestamp();
            const name = `step${step}-${label}-${timestamp}.png`;
            const buffer = await page.screenshot({ path: `./images-tests/${name}` });
            await page.moveMouseTo(100, 200);
            await testInfo.attach(`${label} (${timestamp})`, {
                body: buffer,
                contentType: 'image/png',
            });
        };

        page.verifyCookies = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const consentBtn = page.locator('#onetrust-pc-btn-handler');
            if (await consentBtn.isVisible()) {
                await consentBtn.click();
                await page.locator('.save-preference-btn-handler.onetrust-close-btn-handler').click();
            }
        }

        page.getLangPage = async (): Promise<Lang> => {
            const responseLang = await page.evaluate(() => {
                const lang = document.querySelector("html")?.getAttribute("lang")?.toLowerCase();
                if (lang?.includes("-")) {
                    return lang.split("-")[1].toLowerCase();
                }
                return lang;
            }) as Lang;

            return responseLang;
        }

        page.isElementPresent = async (selector: string): Promise<boolean> => {
            return await page.locator(selector).isVisible();
        }

        page.selectElementDOM = async (selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
            return await page.$(selector);
        }

        page.selectButtonAndClick = async (selector: string): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const elementPresent = await page.isElementPresent(selector);
            if (elementPresent) {
                await expect(page.locator(selector)).toBeVisible();
                await page.locator(selector).click();
            }
        }

        page.selectOriginFlight = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const currentLang = await page.getLangPage();
            await expect(page.locator('.content-wrap')).toBeVisible();
            await expect(page.locator('#originBtn')).toBeVisible();
            const origen = page.getByPlaceholder((copys[currentLang]).origen);
            await page.locator('button#originBtn').click();
            await origen.fill(copys['ciudad_origen']);
            await origen.press('Enter');
            await (page.locator('id=' + copys['ciudad_origen'])).click();
        }

        page.selectDestinationFlight = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const currentLang = await page.getLangPage();
            const destino = page.getByPlaceholder(copys[currentLang].destino);
            await destino.click();
            await destino.fill(copys['ciudad_destino']);
            await destino.press('Enter');
            await (page.locator('id=' + copys['ciudad_destino'])).click();
        }

        page.selectDateInitFlight = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            await expect(page.locator('id=departureInputDatePickerId')).toBeVisible();
            const fechaIda = await page.locator('id=departureInputDatePickerId');
            fechaIda.click();
            await expect(page.locator('span').filter({ hasText: copys['fecha_salida'] })).toBeVisible();
            await page.locator('span').filter({ hasText: copys['fecha_salida'] }).click();
        }

        page.selectDateEndFlight = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            await expect(page.locator('span').filter({ hasText: copys['fecha_llegada'] })).toBeVisible();
            await page.locator('span').filter({ hasText: copys['fecha_llegada'] }).click();
        }

        page.selectPassengers = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            await page.waitForTimeout(300);
            await page.getByRole('button', { name: '' }).nth(1).click();
            await page.getByRole('button', { name: '' }).nth(2).click();
            await page.getByRole('button', { name: '' }).nth(3).click();
            const confirmar = await page.locator('div#paxControlSearchId > div > div:nth-of-type(2) > div > div > button')
            confirmar.click();
        }

        page.selectCheckWayReturn = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const wayReturn = page.locator("#journeytypeId_0");
            await expect(wayReturn).toBeVisible();
            await wayReturn.scrollIntoViewIfNeeded();
            wayReturn.click();
        }

        page.selectCheckOneWay = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            const oneWay = page.locator("#journeytypeId_1");
            await expect(oneWay).toBeVisible();
            await oneWay.scrollIntoViewIfNeeded();
            oneWay.click();
        }

        page.validateModalSelectionFlight = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            await page.waitForTimeout(1500);
            const isVisibleModal = await page.locator("#FB310").first().isVisible();
            if (isVisibleModal) {
                await expect(page.locator(".cro-button.cro-no-accept-upsell-button")).toBeVisible();
                await page.locator(".cro-button.cro-no-accept-upsell-button").first().click();
            }
        }

        page.selectFlightsOneWay = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);

            await page.waitForSelector(".journey_price_fare-select_label-text", { timeout: 60_000 });
            await expect(page.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
            await page.locator('.journey_price_fare-select_label-text').first().click();
            await page.waitForSelector(".journey_fares");
            await page.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
            await page.validateModalSelectionFlight();
        }

        page.selectFlightReturns = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);
            await page.moveMouseTo(100, 200);
            await page.waitForSelector("#journeysContainerId_1", { timeout: 20000 });
            const containerVuelta = page.locator("#journeysContainerId_1");
            await expect(containerVuelta).toBeVisible();
            await expect(containerVuelta.locator(".journey_price_fare-select_label-text").first()).toBeVisible();
            await containerVuelta.locator(".journey_price_fare-select_label-text").first().click();
            await page.takeScreenshot('seleccion-vuelo-regreso');
            await containerVuelta.locator('.journey_fares').first().locator('.light-basic.cro-new-basic-button').click();
            await page.validateModalSelectionFlight();
        }

        page.moveMouseTo = async (x: number, y: number): Promise<void> => {
            await page.mouse.move(x, y, { steps: 20 });
            await page.keyboard.press('ArrowDown');
            await page.waitForTimeout(1000); // simula que el usuario piensa
        }

        page.fillFieldsPassenger = async (): Promise<void> => {
            await page.waitForSelector(".passenger_data_group");
            await page.evaluate(() => {
                const userNamesData: Array<string> = [
                    "john doe",
                    "jane smith",
                    "alexander wilson",
                    "maria gomez",
                    "roberto perez",
                    "lucia martinez",
                    "david hernandez",
                    "carla jones",
                    "luis vega",
                    "susan brown"
                ];

                const lastNamesData: Array<string> = [
                    "Doe",
                    "Smith",
                    "Wilson",
                    "Gomez",
                    "Perez",
                    "Martinez",
                    "Hernandez",
                    "Jones",
                    "Vega",
                    "Brown"
                ];

                const emailsData: Array<string> = [
                    "monitoreo.digital@avianca.com"
                ];

                const phoneNumbersData: Array<string> = [
                    "123456",
                    "987654",
                    "654321",
                    "321654",
                    "987123",
                    "456789",
                    "102938",
                    "112233",
                    "778899",
                    "334455"
                ];

                const getDataRandom = (data: Array<string> = []): string => {
                    return data[Math.floor(Math.random() * data.length)];
                }

                const getValueElement = (element: HTMLInputElement): string => {
                    let value: string | null = null;
                    if (element.name === "email") {
                        value = getDataRandom(emailsData);
                    }
                    else if (element.name === "phone_phoneNumberId") {
                        value = getDataRandom(phoneNumbersData);
                    }
                    else if (element.id.includes("IdFirstName")) {
                        value = getDataRandom(userNamesData);
                    }
                    else {
                        value = getDataRandom(lastNamesData);
                    }
                    return value;
                }

                const setValuesDefaultAutoForm = async () => {
                    const elements = document.querySelectorAll('.ui-input');
                    Array.from(elements).forEach((element) => {
                        if (element.tagName === "BUTTON") {
                            const elementButton = element as HTMLButtonElement;
                            elementButton.click();
                            const listOptions = document.querySelector(".ui-dropdown_list");
                            (listOptions?.querySelector(".ui-dropdown_item>button") as HTMLButtonElement).click();
                        }
                        else if (element.tagName === "INPUT") {
                            const elementInput = element as HTMLInputElement;
                            const containers = document.querySelectorAll(".ui-input-container");
                            Array.from(containers).forEach(e => { e.classList.add("is-focused") });
                            let eventBlur: Event = new Event("blur");
                            let eventFocus: Event = new Event("focus");
                            elementInput.value = getValueElement(elementInput);
                            ['change', 'input'].forEach(event => {
                                let handleEvent = new Event(event, { bubbles: true, cancelable: false });
                                element.dispatchEvent(handleEvent);
                            });
                            element.dispatchEvent(eventFocus);
                            setTimeout(() => {
                                element.dispatchEvent(eventBlur);
                                Array.from(containers).forEach(e => { e.classList.remove("is-focused") });
                            }, 100);
                        }
                    });

                    const fieldAuthoritation = document.querySelector("#acceptNewCheckbox") as HTMLInputElement;
                    if (fieldAuthoritation) fieldAuthoritation.checked = true;
                }
                setValuesDefaultAutoForm();
            });
        }

        page.configInitialTest = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);
            await page.addInitScript(() => {
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => false,
                });
                Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
                Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
                //@ts-ignore
                window.chrome = { runtime: {} }; // Chrome detection
            });

            await page.goto('https://www.avianca.com/');
            await page.takeScreenshot('página-principal-avianca');
            await page.verifyCookies();
        }

        //#endregion

        //#region páginas o flujos de avianca
        page.homePageAvianca = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);
            await page.selectOriginFlight();
            await page.takeScreenshot('seleccion-ciudad-origen');
            await page.selectDestinationFlight();
            await page.takeScreenshot('seleccion-ciudad-destino');
            await page.selectDateInitFlight();
            await page.takeScreenshot('seleccion-fecha-ida');
            await page.selectDateEndFlight();
            await page.takeScreenshot('seleccion-fecha-vuelta');
            await page.selectPassengers();
            await page.takeScreenshot('seleccion-pasajeros');
            await page.selectButtonAndClick("#searchButton");
            await page.takeScreenshot('busqueda-resultados-vuelos');
            await page.waitForSelector("#pageWrap");
        }

        page.flightPageAvianca = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);
            await page.selectFlightsOneWay();
            await page.takeScreenshot('seleccion-vuelo-ida');
            await page.selectFlightReturns();
            await page.takeScreenshot("seleccion-vuelo-regreso");
            await page.waitForTimeout(500);
            await page.takeScreenshot('resumen-de-vuelos-seleccionados');
            await page.selectButtonAndClick(".button.page_button.btn-action");
        }

        page.passengerPageAvianca = async (): Promise<void> => {
            await page.moveMouseTo(100, 200);
            await page.takeScreenshot("inicio-de-llenado-pagina-de-pasajeros");
            await page.fillFieldsPassenger();
            await page.waitForTimeout(1500);
            await page.takeScreenshot("llenado-de-pasajeros-ok");
            const continueButton = page.locator(".button.page_button.btn-action");
            await expect(continueButton.last()).toBeVisible();
            await continueButton.last().click();
        }
        //#endregion

        await use(page);
    }
});

export { expect } from '@playwright/test';