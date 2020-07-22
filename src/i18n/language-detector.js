import { getLangugage, setLangugage } from 'utils/localStorage';

export const getCurrentLocale = (callback) => {
    const defaultLocale = 'az';
    return callback(defaultLocale);
};

const callFallbackIfFunc = (fallback, callback) => {
    if (typeof fallback === 'function') {
        return fallback(callback);
    }

    return callback(fallback);
};

export default (fallback) => ({
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
        try {
            const language = getLangugage();
            if (language) {
                if (typeof fallback === 'string' && language !== fallback) {
                    callback(fallback);
                } else {
                    callback(language);
                }
            } else {
                callFallbackIfFunc(fallback, callback);
            }
        } catch (error) {
            callFallbackIfFunc(fallback, callback);
        }
    },
    init: () => {
        // do nothing.
    },
    cacheUserLanguage: (lang) => {
        try {
            setLangugage(lang);
        } catch (error) {
            console.error(error);
        }
    },
});
