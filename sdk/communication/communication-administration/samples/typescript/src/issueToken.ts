// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to use the CommunicationIdentityClient to
 * issue a new user token.
 */

import { CommunicationIdentityClient, TokenScope } from "@azure/communication-administration";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set this environment variables or edit the following values
const connectionString =
  process.env["COMMUNICATION_CONNECTION_STRING"] || "<communication service connection string>";

export const main = async () => {
  console.log("== Issue Token Sample ==");

  const client = new CommunicationIdentityClient(connectionString);
  const scopes: TokenScope[] = ["chat"];

  // Create user
  console.log("Creating User");

  const user = await client.createUser();

  console.log(`Created user with id: ${user.communicationUserId}`);
  console.log("Issuing Token");

  // Issue token and get token from response
  const { token } = await client.issueToken(user, scopes);

  console.log(`Issued token: ${token}`);
};

main().catch((error) => {
  console.error("Encountered an error while issuing token: ");
  console.error("Request: \n", error.request);
  console.error("\nResponse: \n", error.response);
  console.error(error);
});
