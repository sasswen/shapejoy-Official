import axios from 'axios';

function JudgmentCurrentServerUrl(ENV: any): string {
  let currentServerUrl: string = '';
  if (ENV === 'dev') {
    currentServerUrl = 'https://fitnessdev.shapejoy.com/api/official';
  } else if (ENV === 'exam') {
    currentServerUrl = 'https://fitnesstest.shapejoy.com/api/official';
  } else if (ENV === 'pro') {
    currentServerUrl = 'https://fitness.shapejoy.com/api/official';
  }
  return currentServerUrl;
}

const service: any = axios.create({
  baseURL: JudgmentCurrentServerUrl(process.env.NODE_ENV),
  headers: {
    'content-type': 'application/json;charset=UTF-8;application/x-www-form-urlencoded;'
  },
  timeout: 5000,
  withCredentials: false
});

// http response 拦截器
service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error === 'Request failed with status code 500') {
      return false;
    }
    return Promise.reject(error);
  }
);

export default service;
