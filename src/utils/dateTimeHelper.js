import { DateTime } from 'luxon';

export const UI_DATE_FORMAT = 'dd.MM.yyyy';
export const UI_DATETIME_FORMAT = 'dd.MM.yyyy HH:mm';

export const utcNow = () => DateTime.utc();

export const toUIDate = (dateTime, withTime) => dateTime.toFormat(withTime ? UI_DATETIME_FORMAT : UI_DATE_FORMAT);

export const toISODate = (dateTime, withTime) => (withTime ? dateTime.toISO() : dateTime.toISODate());

export const fromJSDate = (jsDate) => DateTime.fromJSDate(jsDate);

export const fromISODate = (isoDate) => DateTime.fromISO(isoDate);

export const fromUIDate = (dateStr, withTime) =>
    DateTime.fromFormat(dateStr, withTime ? UI_DATETIME_FORMAT : UI_DATE_FORMAT);

export const trimEmptyTime = (dateStr) => dateStr.replace('00:00', '').trim();

export const toLocalUIDateTime = (isoDate) => {
    const localDateTime = fromISODate(`${isoDate}Z`).toLocal();
    return trimEmptyTime(toUIDate(localDateTime, true));
};
