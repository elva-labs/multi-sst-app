import { StackContext, Api, Config } from "@serverless-stack/resources";

export function MasterAppStack({ stack }: StackContext) {
  const api = new Api(stack, "MasterAppApi", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  new Config.Parameter(stack, "MASTER_APP_PARAMETER", {
    value: "MASTER APP parameter value",
  });
  process.env.MASTER_APP_ENV = "MASTER APP env value";
  stack.addOutputs({
    ApiEndpoint: api.url,
    MasterAppStackOutput: "MASTER APP stack output value",
  });
}
