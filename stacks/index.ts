import { MasterAppStack } from "./MasterAppStack";
import { App, Function } from "@serverless-stack/resources";
import { Aspects } from "aws-cdk-lib";
import { CfnFunction } from "aws-cdk-lib/aws-lambda";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  // SST v1 can't select nodejs22.x and Node 20 and older are EOL and unpatched (CVE-2026-111497): rewrite the deployed runtime.
  Aspects.of(app).add({
    visit(node) {
      if (
        node instanceof CfnFunction &&
        node.node.scope instanceof Function &&
        typeof node.runtime === "string" &&
        node.runtime.startsWith("nodejs")
      ) {
        node.runtime = "nodejs22.x";
      }
    },
  });
  app.stack(MasterAppStack);
}
