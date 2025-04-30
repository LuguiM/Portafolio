import { en as navEn, es as navEs} from './translate/nav.json'
import { enHome, esHome} from './translate/views/home.json'
import { enExperience, esExperience} from './translate/views/experience.json'
import { enTech, esTech } from './translate/views/tech.json'
import { enProjects, esProjects } from './translate/views/projects.json'

// Data
import { enDataWeb, esDataWeb } from './translate/data/webProjects.json'

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
        ...esTech,
        ...esProjects,
        ...esDataWeb
    },
    en: {
        ...navEn,
        ...enHome,
        ...enExperience,
        ...enTech,
        ...enProjects,
        ...enDataWeb
    },
} as const;