import { axiosInstance } from "@/lib/axiosInstance";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

type axiosBaseQueryType = {
  baseUrl?: string;
};

export const axiosBaseQuery =
  ({
    baseUrl = "",
  }: axiosBaseQueryType): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance({
        url: `${baseUrl}${url}`,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (error) {
      const axiosError = error as AxiosError;

      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
