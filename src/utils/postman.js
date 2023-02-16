import axios from "axios";
import qs from "qs";

/**
 * Задание базового URL и сериализация параметров
 * @type {AxiosInstance}
 */
export const postman = axios.create({
  paramsSerializer: (params) =>
    qs.stringify(params, { indices: false, arrayFormat: "repeat" }),
});

/**
 * Добавление параметров конфигурации для запросов по умолчанию
 */
postman.interceptors.request.use((config) => {
  config.params = config.params || {};
  return config;
});

/**
 * Обработка ответа запроса
 */
postman.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      throw error.response;
    }

    throw error;
  }
);
/**
 * Добавление/удаление токена доступа для заголовка запроса
 * @param token string
 */
export let setAccessToken = (token) => {
  if (token !== null) {
    postman.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete postman.defaults.headers.common.Authorization;
  }
};

setAccessToken(localStorage.getItem("key"));
