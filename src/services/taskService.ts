import { httpClient } from 'utils/httpClient';
import { throwIfNullOrEmpty, throwIfNull } from 'utils/exceptionHelper';

const BASE_ROUTE = 'api/tasks';

export const getTaskList = async (request) => {
    return await httpClient.post(`${BASE_ROUTE}/list`, request || {});
};

export const getTaskById = async (taskId) => {
    throwIfNullOrEmpty({ taskId });
    return await httpClient.get(`${BASE_ROUTE}/${taskId}`);
};

export const createTask = async (task) => {
    throwIfNull({ task });
    return await httpClient.post(BASE_ROUTE, task);
};

export const updateTask = async (task) => {
    throwIfNull({ task });
    return await httpClient.put(BASE_ROUTE, task);
};
