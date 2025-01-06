"use client";

import React from "react";
// import { testRest } from "@/lib/ApolloClient";
const Clientcache = () => {
  const handleClick = async () => {
    // await testRest();
    fetch("http://localhost:3000/api", { cache: "force-cache" });
    console.log("asd");
  };

  return (
    <div>
      <h1>Client Cache 2</h1>
      {/* <div>Rendered at: {new Date().toString()}</div>s */}
      <button onClick={handleClick}>CLick</button>
    </div>
  );
};

export default Clientcache;
