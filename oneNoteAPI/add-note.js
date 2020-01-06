/*
This function is used to add a note to DynamoDB
HTTP method: POST
Route:POST /note
*/

//initialization
const AWS=require('aws-sdk');
const dynamodb=new AWS.DynamoDB.DocumentClient();
AWS.config.update({region:"us-west-2"});
const util=require('./util.js');
const moment=require("moment");
const uuid=require("uuid/v4");


//fetch table name from environment variable NOTES_TABLE
const tableName=process.env.NOTES_TABLE;

exports.handler=async(event)=>{
  try{
    //matching format with API request
      let item=JSON.parse(event.body).Item;
      //set up attributes
      item.user_id=util.getUserId(event.headers);
      item.user_name=util.getUserName(event.headers);
      item.note_id=item.user_id+":"+uuid();
      item.timestamp=moment().unix();
      item.expires=moment().add(120,'days').unix();

      await dynamodb.put({
        TableName: tableName,
        Item: item
      }).promise();

    return {
      statusCode: 200,
      headers: util.getResponseHeaders(),
      body: JSON.stringify(item)
    };
  }catch(err){
    //print error, return http response object for lamba proxy integration
    console.log("There is an error to add a note", err);
    return {
      statusCode: err.statusCode ? err.statusCode:500,
      headers: util.getResponseHeaders(),
      body: JSON.stringify({
            error: err.name ? err.name: "Exception",
            message: err.message? error.message: "Enable to add note"
      })

    };
  }
}
