import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/axiosBaseQuery";
import { API_URL } from "@/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    // Log In
    logIn: builder.mutation<User, LogInParams>({
      query: (data) => ({ url: "/auth/login", method: "POST", data }),
    }),
    // Sign Up
    signUp: builder.mutation<User, SignUpParams>({
      query: (data) => ({ url: "/auth/signup", method: "POST", data }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = apiSlice;
