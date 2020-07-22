import axios from 'axios';
import { notification } from 'components/feedback/notification';
import { baseUrl } from 'config';
import { getToken, setCache, getFromCache } from 'utils/localStorage';
import { newGuid } from 'utils/guid';
import { HttpStatusCode } from 'enum';

const getAuthorizationHeader = () => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const createClient = () =>
    axios.create({
        baseURL: baseUrl,
        headers: {
            ...getAuthorizationHeader(),
            'x-requestid': newGuid(),
        },
    });

const onResponse = (response) => {
    const { status, headers, data } = response;
    return { status, headers, data, error: null };
};

const transformBlobError = async (blobResponse) => {
    let error = null;

    try {
        const resText = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('abort', reject);
            reader.addEventListener('error', reject);
            reader.addEventListener('loadend', () => {
                resolve(reader.result);
            });
            reader.readAsText(blobResponse);
        });
        error = JSON.parse(resText);
    } catch (err) {
        // ignore
    }

    return error;
};

const onError = async ({ response, message }) => {
    if (response) {
        const { status, data } = response;
        if (status === HttpStatusCode.Unauthorized) {
            //TODO: Logout
        }

        if (response.request.responseType === 'blob') {
            const error = await transformBlobError(data);
            return { status, data: null, error };
        }
        return { status, data: null, error: data };
    }

    notification.error({
        key: 'FailedRequestNotification',
        message,
        duration: 0,
    });

    return {
        status: HttpStatusCode.Failed,
        data: null,
        error: null,
    };
};

const callMethod = async (name, ...args) => {
    const method = createClient()[name];
    return await method(...args).then(onResponse, onError);
};

const head = async (url, config) => await callMethod('head', url, config);

const get = async (url, config) => await callMethod('get', url, config);

const post = async (url, data, config) => await callMethod('post', url, data, config);

const put = async (url, data, config) => await callMethod('put', url, data, config);

const del = async (url, data, config) => await callMethod('delete', url, { ...config, data });

export const httpClient = {
    head,
    get,
    post,
    put,
    delete: del,
};

export const requestAndCache = async (fetcher, cacheOptions) => {
    const cached = getFromCache(cacheOptions.key);
    if (cached) {
        return cached;
    }

    const { status, data } = await fetcher();

    if (status === HttpStatusCode.Success) {
        setCache({ ...cacheOptions, data });
        return data;
    }
    return null;
};
