import { apiSlice } from "./apiSlice";

const USER_URL = "/users";
const AUTH_URL = "/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builders => ({
    register: builders.mutation({
      query: data => ({
        url: `${AUTH_URL}/signup`,
        body: data,
        method: "POST"
      })
    }),

    login: builders.mutation({
      query: data => ({
        url: `${AUTH_URL}/login`,
        body: data,
        method: "POST"
      })
    }),

    profile: builders.mutation({
      query: data => ({
        url: `${USER_URL}/profile`, 
        method: "GET",
        body: data
      })
    }),

    logout: builders.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      })
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfile,
  useLogoutMutation
} = userApiSlice;