import { apiSlice } from "./apiSlice";

const USER_URL = "/users";
const AUTH_URL = "/auth";
const COURSE_URL = "/courses";

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
        url: `${AUTH_URL}/logout`,
        method: "POST",
      })
    }),

    getUsers: builders.query({
      query: ()=> ({
        url: `${USER_URL}`,
        method: "GET",
        keepUnusedDataFor: 5
      })    
    }),

    UpdateUser: builders.mutation({
      query: (data, id) => ({
        url: `${USER_URL}/edit/${id}`,
        body: data,
        method: "PUT"
      }),
    }),

    getCourses: builders.query({
      query: () => ({
        url: `${COURSE_URL}`,
        method: "GET"
      })
    })

  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfileMutation,
  useLogoutMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetCoursesQuery,
} = userApiSlice;