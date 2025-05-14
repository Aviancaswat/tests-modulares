import { copysType, Lang } from "../types/aviancaTypes";

export const copys: copysType = {
    idioma: 'es' as Lang,
    pais: 'CO',
    fecha_salida: 'may 14',
    fecha_llegada: 'may 20',
    ciudad_origen: 'BAQ',
    ciudad_destino: 'BOG',
    es: {
        origen: 'Origen',
        destino: 'Hacia',
        buscar: 'Buscar',
        vuelta: 'Vuelta',
    },
    en: {
        origen: 'Origin',
        destino: 'Destination',
        buscar: 'Search',
        vuelta: 'Return',
    },
    pt: {
        origen: 'Origem',
        destino: 'Destino',
        buscar: 'Buscar voos',
        vuelta: 'Regresso',
    },
    fr: {
        origen: 'Origen',
        destino: 'Destination',
        buscar: 'Rechercher',
        vuelta: 'Retour',
    },
    getLang: () => copys.idioma
};
