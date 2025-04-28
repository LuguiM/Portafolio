import { en as navEn, es as navEs} from './translate/nav.json'
import { enHome, esHome} from './translate/views/home.json'
import { enExperience, esExperience} from './translate/views/experience.json'

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';
export const ui = {
    es: {
        ...navEs,
        ...esHome,
        ...esExperience,
    },
    en: {
        ...navEn,
        ...enHome,
        ...enExperience,

    },
} as const;