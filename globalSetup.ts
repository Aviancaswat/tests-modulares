import fs from 'fs';
import fetch from 'node-fetch';

export default async function globalSetup() {
    const proxyList = [
        "72.10.160.93:12649",
        "103.218.24.67:58080",
        "188.253.112.218:80",
        "156.228.115.84:3128",
        "58.209.137.169:8089",
        "101.47.31.33:20000",
        "108.170.12.11:80",
        "18.134.236.231:1080",
        "103.163.244.106:1080",
        "101.47.24.160:20000",
        "103.158.162.18:8080",
        "3.10.93.50:3128",
        "103.158.253.162:8199",
        "50.174.7.156:80",
        "104.207.40.42:3128",
        "222.67.12.40:1080",
        "93.184.9.9:1080",
        "165.140.185.179:39593",
        "49.84.134.15:8089",
        "47.238.134.126:81",
    ];

    const MAX_RETRIES = 10;
    let retries = 0;
    let selectedProxy: string | null = null;

    while (retries < MAX_RETRIES && !selectedProxy) {
        try {
            selectedProxy = proxyList[Math.floor(Math.random() * proxyList.length)];

            const proxyUrl = `http://${selectedProxy}`;
            const testUrl = 'https://httpbin.org/ip'; 

            const res = await fetch(testUrl, {
                method: 'GET',
                headers: { 'Accept': 'application/json' },
                agent: new (require('https').Agent)({ proxy: proxyUrl })
            });

            if (!res.ok) {
                throw new Error(`Proxy no funcional: ${selectedProxy}`);
            }

            // fs.writeFileSync('.proxy-env', `SELECTED_PROXY=http://${selectedProxy}`);
            fs.writeFileSync('.proxy-env', `SELECTED_PROXY=http://50.174.7.156:80`);

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
