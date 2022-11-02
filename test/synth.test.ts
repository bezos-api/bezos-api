
import { Template } from "aws-cdk-lib/assertions";
import * as cdk from "aws-cdk-lib";
import { QuoteApiStack } from "../lib/index";

describe("QuoteApiStack", () => {
  test("synthesizes the way we expect", () => {
    const app = new cdk.App();

    // Create the QuoteApiStack.
    const quoteApiStack = new QuoteApiStack(app, "QuoteApiStack", {});

    // Prepare the stack for assertions.
    const template = Template.fromStack(quoteApiStack);

    // Assert it creates the function with the correct properties...
    template.hasResourceProperties("AWS::Lambda::Function", {
      Handler: "generateQuote.handler",
      Runtime: "nodejs16.x"
    });

    template.hasResourceProperties("AWS::ApiGateway::RestApi", {
      Name: "Endpoint"
    });
  });
});
