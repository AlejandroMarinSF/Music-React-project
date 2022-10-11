import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '4c63d349camshcc2d6dbd4f1e54cp138e4bjsn21c5059f3165');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: (genre) => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;