import axios from 'axios';
import { Alert } from 'react-native';
import * as authActions from '@/redux/authActions';
import { store, AppNavigatorRef } from '@/root';
import { t } from '@/i18n';


const API_URL = 'localhost:5000';
const { user: { accessToken: Authorization } } = store.getState();
const client = axios.create({ baseURL: API_URL, timeout: 20000, headers: { Authorization } });

const request = (options) => {
  const onSuccess = (response) => {
    if (response.status !== 200) return response.status;
    return response.data;
  };

  const updateAccessToken = async () => {
    let newAccessToken;
    const { user } = await store.getState();
    const { refreshToken } = user;
    try {
      const { data } = await client({
        method: 'post',
        data: { refreshToken },
        url: 'auth/refresh-token',
        headers: { 'Content-Type': 'application/json' },
      });
      if (data && typeof data !== 'number') {
        newAccessToken = data.access_token;
        user.accessToken = data.access_token;
        user.refreshToken = data.refresh_token;
        await store.dispatch(authActions.updateUser(user));
      }
      return newAccessToken;
    } catch (err) {
      await store.dispatch(authActions.resetData());
      if (AppNavigatorRef.current) {
        AppNavigatorRef.current.popToTop();
        AppNavigatorRef.current.replace('Login');
        Alert.alert(t('sessionExpired'), t('yourLoginHasExpired'));
      }
      return undefined;
    }
  };

  const onError = async (error) => {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await updateAccessToken();
      if (newAccessToken) {
        const newOptions = options;
        newOptions.headers.Authorization = `Bearer ${newAccessToken}`;
        const response = await request(newOptions);
        return response;
      }
    }
    return Promise.reject(error.response || error.message);
  };
  return client(options).then(onSuccess).catch(onError);
};

export default request;
