export const getLocaleForRoute = (locale) => locale;
export const routeWithLocale = (name, locale, params = {}) => {
    if (!locale) return route(name, params);

    return route(`localized.${name}`, { locale, ...params });
};
