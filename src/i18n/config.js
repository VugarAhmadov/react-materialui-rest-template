export const fallback = 'az';

export const supportedLocales = {
    en: {
        name: 'English',
        translationFileLoader: () => require('./lang/en.json'),
        momentLocaleLoader: () => Promise.resolve(),
    },
    az: {
        name: 'Azərbaycanca',
        translationFileLoader: () => require('./lang/az.json'),
        momentLocaleLoader: () => Promise.resolve(),
    },
    ru: {
        name: 'Русский',
        translationFileLoader: () => require('./lang/ru.json'),
        momentLocaleLoader: () => Promise.resolve(),
    },
};

export const defaultNamespace = 'common';

export const namespaces = [
    'common',
    'auth',
    'home',
    'profile',
    'favorites',
    'viewHistory',
    'applications',
    'jobList',
    'jobDetails',
    'resumeList',
    'filter',
    'category',
];
