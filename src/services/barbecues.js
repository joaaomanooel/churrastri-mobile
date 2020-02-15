import api from './api';

const baseUrl = 'barbecues';

export const getAll = () => api({ method: 'get', url: baseUrl });
export const insert = data => api({ method: 'post', url: baseUrl, data });
export const getById = id => api({ method: 'get', url: `${baseUrl}/${id}` });
export const remove = id => api({ method: 'delete', url: `${baseUrl}/${id}` });
export const update = (id, data) => api({ method: 'put', url: `${baseUrl}/${id}`, data });
