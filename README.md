# Hot-reloading TypeScript Lambda functions in CDK with LocalStack

## Steps

1. Install dependencies with `npm install`
1. Run `docker-compose up -d` to spin up localstack
1. Run `cdklocal bootstrap` to bootstrap CDK in your localstack instance
1. Run `cdklocal deploy` to deploy the CDK stack with your lambda to localstack
1. Run `npm run watch` in a new terminal to recompile the handler file on change
1. Run `awslocal lambda invoke --function-name test-hotreload outfile && cat outfile` to invoke your function
1. Change the content of the handler file `index.ts` from `return {"hello": "world"}` to `return {"hello": "hot-reload"}` and save the file
1. Run `awslocal lambda invoke --function-name test-hotreload outfile && cat outfile` again to invoke your updated function code
