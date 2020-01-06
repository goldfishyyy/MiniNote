/*
This function is used to update notes to DynamoDB
http method: PATCH
Route: PATCH /note
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
    let item =JSON.parse(event.body).Item;
    item.user_id=util.getUserId(event.headers);
    item.user_name=util.getUserName(event.headers);
    item.expires=moment().add(90,'days').unix();

    let data=await dynamodb.put({
      TableName: tableName,
      Item: item,
      //only update if the item exists
      ConditionExpression: '#t = :t',
      ExpressionAttributeNames: {
        //name of the variable to compare
        '#t' : 'timestamp'
      },
      ExpressionAttributeValues: {
        //value of the variable
        ':t' : item.timestamp
      }
    }).promise();

    return {
      statusCode: 200,
      headers: util.getResponseHeaders(),
      body: JSON.stringify(item)
    };
  }catch(err){
    //print error, return http response object for lamba proxy integration
    console.log("There is an error to update the note", err);
    return {
      statusCode: err.statusCode ? err.statusCode:500,
      headers: util.getResponseHeaders(),
      body: JSON.stringify({
            error: err.name ? err.name: "Exception",
            message: err.message? error.message: "Enable to update note"
      })

    };
  }
}
