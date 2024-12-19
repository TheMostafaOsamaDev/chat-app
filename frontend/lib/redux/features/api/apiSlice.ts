import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/axiosBaseQuery";
import { API_URL } from "@/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({}),
});
