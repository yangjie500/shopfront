// import React, { useState } from "react";
import { testRest } from "@/lib/ApolloClient";

const Clientcache = async () => {
  const value = await testRest();
  return (
    <div>
      <h1>Client Cache 1</h1>
      <div>
        {/* The rendered date will never change! */}
        {/* In fact, the date displayed will be the date the application was built! */}
        Rendered at: {new Date().toString()} : {value}
      </div>
    </div>
  );
};

export default Clientcache;
