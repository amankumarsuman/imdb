import { DataExchange } from "aws-sdk";
import { createServer } from "http";

// Replace these 4 values with your own values
const assetId = "<Put your Asset ID here>";
const datasetId = "<Put your Dataset ID here>";
const revisionId = "<Put your Revision ID here>";
const apiKey = "<Put your API Key here>";

const port = 8080;

(async () => {
  console.log(
    `AWS Data Exchange dataset ID: ${datasetId}\nAWS Data Exchange revision ID: ${revisionId}\nAWS Data Exchange asset ID: ${assetId}\n\nForwarding requests to AWS Data Exchange...\nPlayground started at: http://localhost:${port}/playground\n`
  );

  const dataExchangeClient = new DataExchange({ region: "us-east-1" });
  const server = createServer(
    async (createServerIncomingMessage, serverResponse) => {
      let createServerData = "";
      createServerIncomingMessage.on("connection", function () {});
      createServerIncomingMessage.on("data", function (chunk) {
        createServerData += chunk;
      });
      createServerIncomingMessage.on("end", async function () {
        const body = createServerData;
        const method = createServerIncomingMessage.method!;
        try {
          const response = await dataExchangeClient
            .sendApiAsset({
              AssetId: assetId,
              Body: body,
              DataSetId: datasetId,
              Method: method,
              Path: createServerIncomingMessage.url!,
              RevisionId: revisionId,
              RequestHeaders: { "x-api-key": apiKey },
            })
            .promise();

          serverResponse.writeHead(200, response.ResponseHeaders!);
          serverResponse.end(response.Body!);
        } catch (error: any) {
          serverResponse.writeHead(error.statusCode ?? 400);
          serverResponse.end(
            error.message ?? JSON.stringify({ message: "UnknownError" })
          );
        }
      });
      createServerIncomingMessage.on("error", (error) => {
        serverResponse.end(error.message);
      });
    }
  );
  server.listen(port);
})();