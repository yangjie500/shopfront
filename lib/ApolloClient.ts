import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { GET_PRODUCTS_QUERY } from "@/graphql/shop-api/queries";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  console.log(process.env.BACKEND_URL);
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: process.env.BACKEND_URL,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});

export const testFunc = async () => {
  try {
    const client = getClient();
    const { data } = await client.query({ query: GET_PRODUCTS_QUERY });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const testRest = async (): Promise<string> => {
  const value = await fetch("http://localhost:3000/api", {
    next: {
      revalidate: 10,
    },
  });

  const data = await value.json();
  console.log(data);
  return data.title;
};
