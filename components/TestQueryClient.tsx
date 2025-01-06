"use client";

import { useLazyQuery, useSuspenseQuery } from "@apollo/client";
import {
  GET_PRODUCT_QUERY,
  GET_PRODUCTS_QUERY,
} from "@/graphql/shop-api/queries";

import React, { useState } from "react";

const TestQueryClient = () => {
  const [itemId, setItemId] = useState("0");
  // const [item, setItem] = useState<GetProductQuery>({});
  const [getProduct, { data }] = useLazyQuery(GET_PRODUCT_QUERY, {
    fetchPolicy: "network-only",
  });

  const { data: allData, refetch } = useSuspenseQuery(GET_PRODUCTS_QUERY);
  const handleFetchAll = async () => {
    await refetch();
  };
  const handleFetchOne = async () => {
    getProduct({ variables: { id: itemId } });
  };

  // console.log(allData);
  console.log(data);
  return (
    <>
      <input
        onChange={(e) => setItemId(e.target.value)}
        value={itemId}
        type="number"
      ></input>

      <div>{data ? data.product?.name : "No Item"}</div>
      <button
        className="rounded-md border border-black p-1"
        onClick={handleFetchOne}
      >
        Fetch One Item
      </button>

      <br />
      <button
        className="rounded-md border border-black p-1"
        onClick={handleFetchAll}
      >
        Fetch All Products
      </button>
      <ul>
        {allData.products.items.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default TestQueryClient;
