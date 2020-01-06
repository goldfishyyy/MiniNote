/*
This function is used to get a specific note from DynamoDB
Http method: GET
Route: Get /note/n/{note_id}
*/


//initialization
const AWS=require('aws-sdk');
const dynamodb=new AWS.DynamoDB.DocumentClient();
AWS.config.update({region:"us-west-2"});
const util=require('./util.js');
const _=require('underscore');


//fetch table name from environment variable NOTES_TABLE
const tableName=process.env.NOTES_TABLE;

exports.handler=async(event)=>{
  try{
    let note_id=decodeURIComponent(event.pathParameters.note_id);
    let params={
      TableName: tableName,
      IndexName: 'note_id-index',
      KeyConditionExpression: 'note_id = :note_id',
      ExpressionAttributeValues: {
        ':note_id': note_id
      },
      Limit: 1
    };
    let data=await dynamodb.query(params).promise();
    if(!_.isEmpty(data.Items)){
      return{
        statusCode: 200,
        headers: util.getResponseHeaders(),
        body: JSON.stringify(data.Items[0])
      };
    }else{
      return{
        //when item not found
        statusCode: 404,
        headers: util.getResponseHeaders()
      };
    }
  }catch(err){
    //print error, return http response object for lamba proxy integration
    console.log("There is an error to get a note", err);
    return {
      statusCode: err.statusCode ? err.statusCode:500,
      headers: util.getResponseHeaders(),
      body: JSON.stringify({
            error: err.name ? err.name: "Exception",
            message: err.message? error.message: "Enable to get note"
      })

    };
  }
}
