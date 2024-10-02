import {
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { BACKEND_ENDPOINT } from '@/lib/apollo/apollo-constants';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

export const apolloClient = () => {
  const httpLink = new HttpLink({
    uri: BACKEND_ENDPOINT,
    fetchOptions: { cache: 'no-store' },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
        : httpLink,
  });
};

