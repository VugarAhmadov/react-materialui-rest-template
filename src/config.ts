import defaultCompanyLogo from 'assets/default_company_logo.png';
import logoGray from 'assets/jobyfy-text-gray.svg';
import logoBlue from 'assets/jobyfy-text-blue.svg';

export const socialShareLink = {
    facebook: (url: string): string => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: (url: string): string => `http://twitter.com/share?${url}`,
    linkedin: (url: string): string => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    google: (url: string): string => `https://plus.google.com/share?url=${url}`,
};

export const API_URL = process.env.REACT_APP_API_URL;
export const GA_PROPERTY = process.env.REACT_APP_GA;
export const DEFAULT_PAGE_SIZE = 20;

export const mobileSizes = ['xs', 'sm'];
export { defaultCompanyLogo, logoGray, logoBlue };
