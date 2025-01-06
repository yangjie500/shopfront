"use server";

import { RegisterCustomerInput } from "@/__generated__/types";
import { REGISTER_CUSTOMER_ACCOUNT } from "@/graphql/shop-api/mutations";
import { getClient } from "../ApolloClient";

export const createNewCustomer = async (
  customerInputDetails: RegisterCustomerInput,
) => {
  try {
    const registerNewCustomerResult = await getClient().mutate({
      mutation: REGISTER_CUSTOMER_ACCOUNT,
      variables: {
        input: customerInputDetails,
      },
    });

    console.log(registerNewCustomerResult);
  } catch (error) {
    console.log(error);
  }
};

// export const testFunc = async () => {
//   try {
//     const client = getClient();
//     const { data } = await client.query({ query: GET_PRODUCTS_QUERY });
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
