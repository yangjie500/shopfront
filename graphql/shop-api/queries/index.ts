import { gql } from "@/__generated__";

export const GET_PRODUCTS_QUERY = gql(`
  query GetProducts{
    products {
      totalItems
      items {
        id
        name
      }
    }
  }
`);

export const GET_PRODUCT_QUERY = gql(`
  query GetProduct($id: ID!){
    product (id: $id) {
      id
      name
      slug
      description
    }
  }
`);
