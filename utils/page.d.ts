import { ElementHandle, Locator, Page } from '@playwright/test';
import type { copysType, Lang } from '../types/aviancaTypes';

declare module '@playwright/test' {
    interface Page {
        //#region métodos genéricos  
        isElementPresent(selector: string): Promise<boolean>;
        verifyCookies(): Promise<void>;
        selectButtonAndClick(selector: string): Promise<void>;
        selectElementDOM(selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null>;
        getTimestamp(): string;
        takeScreenshot(label: string): Promise<void>;
        getLangPage(): Promise<Lang>;
        moveMouseTo(x: number, y: number): Promise<void>;
        //#endregion

        //#region métodos Home
        selectCheckOneWay(): Promise<void>;
        selectCheckWayReturn(): Promise<void>;
        selectOriginFlight(): Promise<void>;
        selectDestinationFlight(): Promise<void>;
        selectDateInitFlight(): Promise<void>;
        selectDateEndFlight(): Promise<void>;
        selectPassengers(): Promise<void>;
        //#endregion

        //#region métodos selección de vuelos (solo ida y ida y vuelta)
        selectFlightsOneWay(): Promise<void>;
        selectFlightReturns(): Promise<void>;
        validateModalSelectionFlight(): Promise<void>;
        //#endregion

        //#region métodos para pasajeros
        fillFieldsPassenger(): Promise<void>;
        //#endregion

        //#region métodos para servicios
        //#endregion

        //#region métodos para pagos
        //#endregion

        //#region páginas de avianca
        configInitialTest(): Promise<void>;
        homePageAvianca(): Promise<void>;
        flightPageAvianca(): Promise<void>;
        passengerPageAvianca(): Promise<void>;
        servicesPageAvianca(): Promise<void>;
        seatingPageAvianca(): Promise<void>;
        paymentPageAvianca(): Promise<void>;
        //#endregion
    }
}