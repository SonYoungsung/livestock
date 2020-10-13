import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "",
  cache: new InMemoryCache({
    resultCaching: true,
  }),
});
