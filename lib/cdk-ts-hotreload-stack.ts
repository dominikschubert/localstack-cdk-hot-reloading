import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Runtime} from "aws-cdk-lib/aws-lambda";
import * as path from "path";
import {} from "aws-cdk-lib/aws-lambda-nodejs"

export class CdkTsHotreloadStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const fn = new cdk.aws_lambda_nodejs.NodejsFunction(this, 'fn', {
            runtime: Runtime.NODEJS_16_X,
            functionName: 'test-hotreload',
            entry: path.join(__dirname, "fn", "index.ts"),
            bundling: {
                preCompilation: true,
            }
        });

        const cfnFn = fn.node.defaultChild as cdk.aws_lambda.CfnFunction
        cfnFn.code = {
            s3Bucket: "hot-reload",
            s3Key: path.join(__dirname, "fn"),
        };
    }
}
