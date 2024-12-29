This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Getting all installation

### Prettier and Eslint

```bash
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
npm install --save-dev eslint-config-prettier
npm i -D eslint eslint-plugin-tailwindcss
```

### Design Related

```bash
npx storybook@latest init
npx shadcn@latest init -d
npm install react-icons --save
```

### GraphQL Related

```bash
npm install @apollo/client@latest @apollo/experimental-nextjs-app-support
npm install --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo

```
