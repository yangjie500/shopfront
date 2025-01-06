/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation registerCustomerAccount ($input: RegisterCustomerInput!) {\n    registerCustomerAccount(input: $input) {\n      ... on Success {\n        success\n      }\n      ... on MissingPasswordError {\n        errorCode\n        message\n      }\n      ... on PasswordValidationError {\n        errorCode\n        message\n        validationErrorMessage\n      }\n      ... on NativeAuthStrategyError {\n        errorCode\n        message\n      }\n    }\n  }\n  ": types.RegisterCustomerAccountDocument,
    "\n  mutation Log_In ($username: String!, $password: String!, $rememberMe: Boolean) {\n    login (username: $username, password: $password, rememberMe: $rememberMe) {\n      ... on CurrentUser {\n        id\n        identifier\n      }\n      ... on InvalidCredentialsError {\n        errorCode\n        message\n        authenticationError\n      }\n  }\n}": types.Log_InDocument,
    "\n  mutation LOG_OUT {\n    logout {\n      success\n    }\n}": types.Log_OutDocument,
    "\n  query GetProducts{\n    products {\n      totalItems\n      items {\n        id\n        name\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($id: ID!){\n    product (id: $id) {\n      id\n      name\n      slug\n      description\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation registerCustomerAccount ($input: RegisterCustomerInput!) {\n    registerCustomerAccount(input: $input) {\n      ... on Success {\n        success\n      }\n      ... on MissingPasswordError {\n        errorCode\n        message\n      }\n      ... on PasswordValidationError {\n        errorCode\n        message\n        validationErrorMessage\n      }\n      ... on NativeAuthStrategyError {\n        errorCode\n        message\n      }\n    }\n  }\n  "): (typeof documents)["\n  mutation registerCustomerAccount ($input: RegisterCustomerInput!) {\n    registerCustomerAccount(input: $input) {\n      ... on Success {\n        success\n      }\n      ... on MissingPasswordError {\n        errorCode\n        message\n      }\n      ... on PasswordValidationError {\n        errorCode\n        message\n        validationErrorMessage\n      }\n      ... on NativeAuthStrategyError {\n        errorCode\n        message\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Log_In ($username: String!, $password: String!, $rememberMe: Boolean) {\n    login (username: $username, password: $password, rememberMe: $rememberMe) {\n      ... on CurrentUser {\n        id\n        identifier\n      }\n      ... on InvalidCredentialsError {\n        errorCode\n        message\n        authenticationError\n      }\n  }\n}"): (typeof documents)["\n  mutation Log_In ($username: String!, $password: String!, $rememberMe: Boolean) {\n    login (username: $username, password: $password, rememberMe: $rememberMe) {\n      ... on CurrentUser {\n        id\n        identifier\n      }\n      ... on InvalidCredentialsError {\n        errorCode\n        message\n        authenticationError\n      }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LOG_OUT {\n    logout {\n      success\n    }\n}"): (typeof documents)["\n  mutation LOG_OUT {\n    logout {\n      success\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts{\n    products {\n      totalItems\n      items {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts{\n    products {\n      totalItems\n      items {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProduct($id: ID!){\n    product (id: $id) {\n      id\n      name\n      slug\n      description\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: ID!){\n    product (id: $id) {\n      id\n      name\n      slug\n      description\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;