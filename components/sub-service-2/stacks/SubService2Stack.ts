import { StackContext, Api } from "@serverless-stack/resources";

export function SubService2Stack({ stack }: StackContext) {
  const api = new Api(stack, "SubComponentApi", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
