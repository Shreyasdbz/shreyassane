import '../styles/main.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { SanityContextProvider } from '../graphql/SanityContext';
import { client } from '../graphql/apollo-client';

import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SanityContextProvider>
        <Component {...pageProps} />
      </SanityContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
