
type Lang = 'es' | 'en' | 'pt' | 'fr';

type copysType = {
    idioma: Lang,
    pais: string,
    fecha_salida: string,
    fecha_llegada: string,
    ciudad_origen: string,
    ciudad_destino: string,
    es: {
        origen: string,
        destino: string,
        buscar: string,
        vuelta: string,
    },
    en: {
        origen: string,
        destino: string,
        buscar: string,
        vuelta: string,
    },
    pt: {
        origen: string,
        destino: string,
        buscar: string,
        vuelta: string,
    },
    fr: {
        origen: string,
        destino: string,
        buscar: string,
        vuelta: string,
    },
    getLang: () => Lang
}

interface GeonodeProxy {
    _id: string;
    ip: string;
    anonymityLevel: string;
    asn: string;
    city: string | null;
    country: string;
    created_at: string;
    google: boolean;
    isp: string;
    lastChecked: number;
    latency: number;
    org: string;
    port: string;
    protocols: string[];
    region: string | null;
    responseTime: number;
    speed: number;
    updated_at: string;
    workingPercent: number | null;
    upTime: number;
    upTimeSuccessCount: number;
    upTimeTryCount: number;
}

interface GeonodeProxyResponse {
    data: GeonodeProxy[];
    total: number;
    page: number;
    limit: number;
}

export type { copysType, Lang, GeonodeProxy, GeonodeProxyResponse };