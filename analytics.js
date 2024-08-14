const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid');

// Step 1: Initialize DynamoDB Client using our enviroment variables
const client = new DynamoDBClient({
    region: 'ap-southeast-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// Step 2: Create a Function that logs page view
async function logPageView(pageID) {
    const timestamp = new Date().toISOString();
    const params = {
        TableName: 'websiteAnalytics',
        Item: {
            websiteKey: { S: pageID },
            webTimeStamp: { S: timestamp },
            ViewID: { S: uuidv4() },
        },
    };

    try {
        const data = await client.send(new PutItemCommand(params));
        console.log("Page view logged:", data);
    } catch (err) {
        console.error("Error logging page view:", err);
    }
}

// Step 3: Implement the function for our homepage or index.html
logPageView('index');

