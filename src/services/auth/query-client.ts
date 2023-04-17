import { QueryClient, QueryCache, MutationCache } from 'react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err, query) => {},
  }),
  mutationCache: new MutationCache({
    onError: async (err) => {},
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      notifyOnChangeProps: 'tracked',
    },
  },
});
