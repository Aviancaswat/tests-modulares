
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

interface GimmeProxyResponse {
  ip: string;
  port: number;
  protocol: 'http' | 'https' | 'socks4' | 'socks5';
  anonymityLevel: number; // 1 = elite, 2 = anonymous, 3 = transparent
  supportsHttps: boolean;
  country: string;
  ts: number;
  curl: string;
  get: string;
  post: string;
  cookies: string;
  referer: string;
  userAgent: string;
  uptime: number;
  speed: number;
  responseTime: number;
  nextIp: string;
  proxy: string;
  error?: string;
}



export type { copysType, Lang, GimmeProxyResponse };