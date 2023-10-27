import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Add header in order to run the API ( For header of API use RAPIDAPI)

const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: newsHeader }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&count=${count}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
