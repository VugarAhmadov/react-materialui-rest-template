import { t } from 'i18n';
import { fromISODate } from 'utils/dateTimeHelper';

const dateDiffInDays = (posted: string): number => {
    const today = new Date();
    const postedTime = new Date(posted);
    const result = (Number(today) - Number(postedTime)) / 86400000;

    return Math.floor(result);
};

const formatDate = (date: string): string => {
    const newDate = new Date(date);
    const dd = String(newDate.getDate()).padStart(2, '0');
    const mm = String(newDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = newDate.getFullYear();

    const result = `${mm}.${dd}.${yyyy}`;
    return result;
};

export const getDatePosted = (posted: string): number => {
    const postedDaysAgo = dateDiffInDays(posted);

    return postedDaysAgo;
};

export const getDateText = (posted: string): string => {
    const postedDaysAgo = dateDiffInDays(posted);
    if (postedDaysAgo < 1) {
        return t('common:today');
    }

    if (postedDaysAgo < 31) {
        return t('common:daysBefore', { count: postedDaysAgo });
    }

    return formatDate(posted);
};

export const normalizeJobs = (jobs: any): any => {
    return jobs.map((job: any) => {
        const postedDaysAgo = Math.floor(Math.abs(fromISODate(job.posted).diffNow('days').days));

        return {
            ...job,
            PostedDaysAgo: postedDaysAgo,
        };
    });
};
