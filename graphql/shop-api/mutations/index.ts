import { gql } from "@/__generated__";

export const REGISTER_CUSTOMER_ACCOUNT = gql(`
  mutation registerCustomerAccount ($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      ... on Success {
        success
      }
      ... on MissingPasswordError {
        errorCode
        message
      }
      ... on PasswordValidationError {
        errorCode
        message
        validationErrorMessage
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
    }
  }
  `);

export const LOG_IN = gql(`
  mutation Log_In ($username: String!, $password: String!, $rememberMe: Boolean) {
    login (username: $username, password: $password, rememberMe: $rememberMe) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on InvalidCredentialsError {
        errorCode
        message
        authenticationError
      }
  }
}`);

export const LOG_OUT = gql(`
  mutation LOG_OUT {
    logout {
      success
    }
}`);
