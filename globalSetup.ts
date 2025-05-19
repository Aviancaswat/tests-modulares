import fs from 'fs';
import fetch from 'node-fetch';
import { GeonodeProxyResponse } from './types/aviancaTypes';

const getProxy = async (): Promise<GeonodeProxyResponse> => {
    const URL_PROXY = "https://proxylist.geonode.com/api/proxy-list?limit=1&page=1&sort_by=lastChecked&order=desc";
    const dataProxys = await fetch(URL_PROXY);
    const response = await dataProxys.json() as GeonodeProxyResponse;
    return response;
}

export default async function globalSetup() {

    const MAX_RETRIES = 10;
    let retries = 0;
    let selectedProxy: string | null = null;

    while (retries < MAX_RETRIES && !selectedProxy) {
        
        try {

            const responseProxy = await getProxy();
            const dataProxy = responseProxy.data[0];

            // <protocolo>://<ip>:<puerto>
            selectedProxy = `${dataProxy.protocols[0]}://${dataProxy.ip}:${dataProxy.port}`;

            fs.writeFileSync('.proxy-env', `SELECTED_PROXY=${selectedProxy}`);

            console.log(`✅ Proxy guardado: ${selectedProxy}`);
            console.log("Proxy enviroment: ", process.env.SELECTED_PROXY);

        } catch (err) {
            retries++;
            console.error(`❌ Intento ${retries} de ${MAX_RETRIES}: No se pudo obtener un proxy funcional: ${err}`);
            if (retries < MAX_RETRIES) {
                await new Promise(resolve => setTimeout(resolve, 5000));
            } else {
                throw new Error('No se pudo obtener un proxy funcional después de varios intentos');
            }
        }
    }
}
