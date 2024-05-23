import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://tracking.bosta.co/shipments/track";

export const ordersApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: (id) => id,
    }),
  }),
});
export const { useGetOrderQuery } = ordersApi;
