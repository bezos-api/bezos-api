# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Development setup

> _Prerequisites:_ [npm](https://www.npmjs.com/), [Node v16](https://nodejs.org/en/download/), [AWS](aws.amazon.com) account

```
$ npm install -g aws-cdk
$ git clone https://github.com/bezos-api/bezos-api.git
$ cd bezos-api
$ npm install
$ cdk deploy
```

Then, to dispose of the stack/s afterwards
```
$ cdk destroy
```

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

### (Advanced) Debug Lambda functions locally

1.  Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

2. Run the API locally following the [AWS SAM usage example](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging.html)

### Deployment Notes

If you were to run `cdk deploy`, it will create the resources, the `CloudStack`, `CloudWatch` logs, and `S3 Buckets`.

Running `cdk destroy` removes the resources.

> **Note (a):** After `cdk destroy`, the Lambda function created will generate CloudWatch logs that are permanently retained. These will not be tracked by CloudFormation since they are not part of the stack, so the logs will still persist. You will have to manually delete these in the console if desired.

> **Note (b):** The bootstrapping stack created through `cdk bootstrap` command still exists. If you plan on using the CDK in the future (we hope you do!) do not delete this stack. If you would like to delete this stack, it will have to be done through the CloudFormation console. Head over to the CloudFormation console and delete the CDKToolkit stack. The S3 bucket created will be retained by default, so if you want to avoid any unexpected charges, be sure to head to the S3 console and empty + delete the bucket generated from bootstrapping.

## How to contribute

> _Note:_ you may be looking to add to [`quotes.json`](https://github.com/bezos-api/bezos-api/blob/main/lambda/quotes.json), the data used for the API.

To contribute, send us a pull request. For small changes, such as fixing a typo or adding a link, you can use the [GitHub Edit Button](https://blog.github.com/2011-04-26-forking-with-the-edit-button/). For larger changes:

1. [Fork the repository](https://help.github.com/articles/fork-a-repo/).
2. In your fork, make your change in a branch that's based on this repo's **main** branch.
3. Commit the change to your fork, using a clear and descriptive commit message.
4. [Create a pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/), answering any questions in the pull request form.

Before you send us a pull request, please be sure that:

1. You're working from the latest source on the **main** branch.
2. You check [existing open](https://github.com/awsdocs/amazon-connect-admin-guide/pulls), and [recently closed](https://github.com/awsdocs/amazon-connect-admin-guide/pulls?q=is%3Apr+is%3Aclosed), pull requests to be sure that someone else hasn't already addressed the problem.
3. You [create an issue](https://github.com/awsdocs/amazon-connect-admin-guide/issues/new) before working on a contribution that will take a significant amount of your time.

For contributions that will take a significant amount of time, [open a new issue](https://github.com/awsdocs/amazon-connect-admin-guide/issues/new) to pitch your idea before you get started. Explain the problem and describe the content you want to see added to the documentation. Let us know if you'll write it yourself or if you'd like us to help. We'll discuss your proposal with you and let you know whether we're likely to accept it. We don't want you to spend a lot of time on a contribution that might be outside the scope of the documentation or that's already in the works.

## Finding contributions to work on

If you'd like to contribute, but don't have a project in mind, look at the [open issues](https://github.com/awsdocs/amazon-connect-admin-guide/issues) in this repository for some ideas. Any issues with the [help wanted](https://github.com/awsdocs/amazon-connect-admin-guide/labels/help%20wanted) or [enhancement](https://github.com/awsdocs/amazon-connect-admin-guide/labels/enhancement) labels are a great place to start.

## Code of conduct

This project has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/), version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html.

## Licensing

See the [LICENSE](https://github.com/bezos-api/bezos-api/blob/main/LICENSE) file for this project's licensing.