import api from './api';

const baseUrl = 'auth';

export const login = async data => api({ method: 'post', url: baseUrl, data });

export const refreshToken = async data => api({
  url: `${baseUrl}/refresh-token`,
  method: 'post',
  data,
});
