import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-food-api-03d094431a6b.herokuapp.com/' }),
  tagtypes: ['Foods'],

  endpoints: (build) => ({
    getFoods: build.query({
      query: () => ({ url: 'foods' }),
    }),

    getFood: build.query({
      query: (id) => ({ url: `foods/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Foods', id }],
    }),

    getPerson: build.query({
      query: (id) => ({ url: `person/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Foods', id }],
    }),

    createPerson: build.mutation({
      query(body) {
        return {
          url: 'person',
          method: 'POST',
          body
        }
      }
    }),

    // updateAccount: build.mutation({
    //   query(data) {
    //     const {id, body} = data
    //     return {
    //       url: `accounts/${id}`,
    //       method: 'PUT',
    //       body
    //     }

    //   },
    //   invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    // }),

    // updateAccountBalance: build.mutation({
    //   query(data) {
    //     const {id, balance} = data
    //     return {
    //       url: `accounts/${id}`,
    //       method: 'PUT',
    //       body: { balance }
    //     }

    //   },
      
    //   invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    // }),

    // deleteAccount: build.mutation({
    //   query(id) {
    //     return {
    //       url: `accounts/${id}`,
    //       method: 'DELETE'
    //     }
    //   },
    // })
  })
})


export const {
 useGetFoodsQuery,
 useGetFoodQuery,
 useGetPersonQuery,
 useCreatePersonMutation
} = apiSlice;

