import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Add header in order to run the API ( For header of API use RAPIDAPI)

const BASE_URL = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: cyptoHeader }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptosHistoryDetails: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptosHistoryDetailsQuery,
} = cryptoApi;
