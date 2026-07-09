import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const graphqlUrl = process.env.NEXT_PUBLIC_API_URL;

if (!graphqlUrl) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

const httpLink = createHttpLink({
  uri: graphqlUrl,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

console.log("GraphQL URL:", process.env.NEXT_PUBLIC_API_URL);