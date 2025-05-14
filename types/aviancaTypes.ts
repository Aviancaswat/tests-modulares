
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


export type { copysType, Lang };