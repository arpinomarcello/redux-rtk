import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../models/user.model';

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    users: builder.query<User[], void>({
      query: ()=>'/users'
    })
  })
});

export const {useUsersQuery}= usersApi