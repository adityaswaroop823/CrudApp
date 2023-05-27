import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.poc.graphql.dev.vnplatform.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6ImFkaXR5YXN3YXJvb3A4MEBnbWFpbC5jb20iLCJpc19jYW5kaWRhdGUiOnRydWUsImlhdCI6MTY4NTA4ODA3NCwiZXhwIjoxNjg1NjA2NDc0fQ.f9Yw6BZbzjPl6r37KNDcAsLCEM7BfGrd9dbTvCMG754";

  operation.setContext({
    headers: {
      authorization: token,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

export default client;
