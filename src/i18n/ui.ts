import { en as navEn, es as navEs} from './translate/nav.json'
import { enHome, esHome} from './translate/views/home.json'

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';
export const ui = {
    es: {
        ...navEs,
        ...esHome,
    },
    en: {
        ...navEn,
        ...enHome,

    },
} as const;