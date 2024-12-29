import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/shop-api",
  documents: ["lib/**/*.ts"],
  generates: {
    "__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "__generated__/types.ts": {
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
