/*
This function is used to delete a note from DynamoDB
HTTP method: DELETE
Route: DELETE /note/t/{timestamp}
*/

//initialization
const AWS=require('aws-sdk');
const dynamodb=new AWS.DynamoDB.DocumentClient();
AWS.config.update({region:"us-west-2"});
const util=require('./util.js');



//fetch table name from environment variable NOTES_TABLE
const tableName=process.env.NOTES_TABLE;

exports.handler=async(event)=>{
  try{
    let timestamp=parseInt(event.pathParameters.timestamp);
    let params={
      TableName: tableName,
      //primary key
      Key: {
        user_id: util.getUserId(event.headers),
        timestamp: timestamp
      }
    };
    await dynamodb.delete(params).promise();
    return {
      statusCode: 200,
      headers: util.getResponseHeaders()
    };
  }catch(err){
    //print error, return http response object for lamba proxy integration
    console.log("There is an error to delete a note", err);
    return {
      statusCode: err.statusCode ? err.statusCode:500,
      headers: util.getResponseHeaders(),
      body: JSON.stringify({
            error: err.name ? err.name: "Exception",
            message: err.message? error.message: "Enable to delete note"
      })

    };
  }
}
