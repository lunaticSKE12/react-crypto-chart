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
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
