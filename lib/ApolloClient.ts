import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { gql } from "../__generated__/gql";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "http://localhost:4000/shop-api",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});

const TEST_QUERY = gql(`
  query GetProduct{
    products {
      totalItems
      items {
        id
        name
      }
    }
  }
`);

export const testFunc = async () => {
  try {
    const client = getClient();
    const { data } = await client.query({ query: TEST_QUERY });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
