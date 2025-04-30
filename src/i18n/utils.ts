import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getCollection(
  lang: keyof typeof ui,
  prefix: string
) {
  const t = useTranslations(lang);
  const langData = ui[lang];

  const keys = Object.keys(langData);
  const ids = new Set<string>();

  // Detecta los ids únicos por ejemplo: web1, web2, exp1...
  for (const key of keys) {
    if (key.startsWith(prefix)) {
      const match = key.slice(prefix.length).split(".")[0];
      if (match) ids.add(match);
    }
  }

  const collection = Array.from(ids).map((id) => {
    const base = `${prefix}${id}`;
    return {
      id,
      key: t(`${base}.key` as any),
      title: t(`${base}.title` as any),
      description: t(`${base}.description` as any),
      tech: ui[lang][`${base}.tech`] || [],
      github: t(`${base}.github` as any),
      link: t(`${base}.link` as any),
    };
  });

  return collection;
}
