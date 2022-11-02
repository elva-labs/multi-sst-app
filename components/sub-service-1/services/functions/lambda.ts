import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // const masterEnv = process.env.MASTER_APP_PARAMETER;
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "Hello, sub service 1!",
  };
};
