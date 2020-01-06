/*
This function is used to get notes from DynamoDB
Http method: GET
Route: Get /notes
*/

//initialization
const AWS=require('aws-sdk');
const dynamodb=new AWS.DynamoDB.DocumentClient();
AWS.config.update({region:"us-west-2"});
const util=require('./util.js');
const moment=require("moment");



//fetch table name from environment variable NOTES_TABLE
const tableName=process.env.NOTES_TABLE;

exports.handler=async(event)=>{
  try{
    let query=event.queryStringParameters;
    //limit: the number of the item to read at a time
    let limit=query&&query.limit? parseInt(query.limit): 5;
    let user_id=util.getUserId(event.headers);
    let params={
      TableName: tableName,
      KeyConditionExpression:  'user_id = :uid',
      ExpressionAttributeValues: {
        ":uid" : user_id
      },
      Limit: limit,
      //data sort in descending order of the sort key: timestamp
      ScanIndexForward: false
    };
    //query start key:
    let startTimestamp=query&&query.start? parseInt(query.start): 0;
    if(startTimestamp>0){
      params.ExclusiveStartKey={
        user_id: user_id,
        timestamp: startTimestamp
      }
    }
    let data=await dynamodb.query(params).promise();
    return {
      statusCode: 200,
      headers: util.getResponseHeaders(),
      body: JSON.stringify(data)
    };
  }catch(err){
    //print error, return http response object for lamba proxy integration
    console.log("There is an error to get  notes", err);
    return {
      statusCode: err.statusCode ? err.statusCode:500,
      headers: util.getResponseHeaders(),
      body: JSON.stringify({
            error: err.name ? err.name: "Exception",
            message: err.message? error.message: "Enable to get notes"
      })

    };
  }
}
