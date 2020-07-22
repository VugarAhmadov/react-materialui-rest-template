export const isEmpty = (value: any): boolean => {
    return value === null || value === undefined || value === '';
};

export const isEmptyObject = (object: any): boolean =>
    object && Object.values(object).every((x) => x === null || x === '');
