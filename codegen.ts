import type { CodegenConfig } from "@graphql-codegen/cli";
import "./envConfig.ts";

const config: CodegenConfig = {
  generates: {
    "__generated__/": {
      schema: process.env.BACKEND_URL,
      documents: ["graphql/shop-api/**/*.ts"],
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "__generated__/types.ts": {
      schema: process.env.BACKEND_URL,
      documents: ["graphql/shop-api/**/*.ts"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        scalars: {
          // This tells codegen that the `Money` scalar is a number
          Money: "number",
        },
        namingConvention: {
          // This ensures generated enums do not conflict with the built-in types.
          enumValues: "keep",
        },
      },
    },
  },
};

export default config;
