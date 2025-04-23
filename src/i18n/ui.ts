import { en as navEn, es as navEs} from './translate/nav.json'

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';
export const ui = {
    es: {
        ...navEs,
    },
    en: {
        ...navEn,

    },
} as const;