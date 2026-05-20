import axios, { type AxiosResponse } from "axios";
import { LANGUAGE_KEYS } from "@/utility/strings";
import { STATIC_VALUES } from "@/utility/strings";
import { cookieAgent } from "@/utility/cookies";
import { notifyError } from "@/utility/notify";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export const ApiCaller = axios.create({
  baseURL: API_BASE_URL,
});

let isUnauthorized = false;

ApiCaller.interceptors.request.use((config) => {
  const accessToken = cookieAgent.get(STATIC_VALUES.COMMON.COOKIE_KEYS.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${String(accessToken)}`;
  }

  if (!config.headers.language) {
    const fromCookie = cookieAgent.get(STATIC_VALUES.COMMON.COOKIE_KEYS.LANGUAGE);
    const normalized =
      fromCookie === LANGUAGE_KEYS.ARABIC
        ? LANGUAGE_KEYS.ARABIC
        : fromCookie === LANGUAGE_KEYS.ENGLISH
          ? LANGUAGE_KEYS.ENGLISH
          : LANGUAGE_KEYS.ENGLISH;
    config.headers.language = String(normalized);
  }
  config.headers["Access-Control-Allow-Headers"] = "*";
  const timeZone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
  if (timeZone) {
    config.headers.timeZone = timeZone;
  }
  return config;
});

ApiCaller.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      if (originalRequest?.url?.includes("/auth")) {
        return Promise.reject(error.response);
      }
      if (error?.response?.status === 401 && !isUnauthorized) {
        isUnauthorized = true;
        notifyError(error?.response?.data?.message);
        setTimeout(() => {
          if (typeof globalThis.window !== "undefined") {
            globalThis.window.localStorage.clear();
            cookieAgent.clean();
            globalThis.window.location.href = "/";
          }
        }, 2000);
        return Promise.reject(error.response);
      }
    }
    return Promise.reject(error?.response);
  },
);

const responseBody = <T = unknown, R = AxiosResponse<T>>(response: R): R => response;

export const requests = {
  get: <T = unknown, R = AxiosResponse<T>>(url: string, headers?: Record<string, string>) =>
    ApiCaller.get<T, R>(url, { headers }).then(responseBody),

  post: <T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    body?: D,
    headers?: Record<string, string>,
  ) => ApiCaller.post<T, R, D>(url, body, { headers }).then(responseBody),

  put: <T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    body?: D,
    headers?: Record<string, string>,
  ) => ApiCaller.put<T, R, D>(url, body, { headers }).then(responseBody),

  delete: <T = unknown, R = AxiosResponse<T>>(url: string, headers?: Record<string, string>) =>
    ApiCaller.delete<T, R>(url, { headers }).then(responseBody),

  deleteCustom: <T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    body: D,
    headers?: Record<string, string>,
  ) =>
    ApiCaller.delete<T, R, D>(url, {
      data: body,
      headers: { "Content-Type": "application/json", ...headers },
    }).then(responseBody),
};
