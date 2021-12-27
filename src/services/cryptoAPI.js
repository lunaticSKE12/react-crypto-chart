import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiHeaders = {
  'x-rapidapi-key': '88c19f5e9cmsh6b64708644faaf9p10c10fjsn8fdec97cacb2',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const createRequest = (url) => ({ url: url, headers: rapidApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
