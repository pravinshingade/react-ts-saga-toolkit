/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { headerContentWithOutAuthorization } from './constant';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: { ...headerContentWithOutAuthorization },
});

// Interceptors
axiosClient.interceptors.request.use(
	function (config: AxiosRequestConfig): any {
		// Do something before request is sent
		console.log('config -- ', config);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response: AxiosResponse) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axiosClient;
