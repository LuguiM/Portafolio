import { en as navEn, es as navEs} from './translate/nav.json'
import { enHome, esHome} from './translate/views/home.json'
import { enExperience, esExperience} from './translate/views/experience.json'
import { enTech, esTech } from './translate/views/tech.json'
import { enProjects, esProjects } from './translate/views/projects.json'
import { enHeadTags, esHeadTags } from './translate/headTags.json'
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
        ...esHeadTags,
        ...esHome,
        ...esExperience,
        ...esTech,
        ...esProjects,
        ...esDataWeb
    },
    en: {
        ...navEn,
        ...enHeadTags,
        ...enHome,
        ...enExperience,
        ...enTech,
        ...enProjects,
        ...enDataWeb
    },
} as const;