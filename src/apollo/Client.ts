import { ApolloClient, InMemoryCache } from "@apollo/client";
import { uid } from "../api/firebase/auth";

export default new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "",
  cache: new InMemoryCache({
    resultCaching: true,
    typePolicies: {
      Query: {
        fields: {
          user() {
            return uid();
          },
        },
      },
    },
  }),
});
