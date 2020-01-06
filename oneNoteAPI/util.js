//This file is used to save commonly used functions for all the lambda functions

// This function is used to return http response headers: CORS
const getResponseHeaders=()=>{
  return{
    'Access-Control-Allow-Origin': '*'
  }
}


//This function is used to get user id from the request headers
const getUserId=(headers)=>{
  return headers.app_user_id;
}

//This function is used to get user name from the request headers
const getUserName=(headers)=>{
  return headers.app_user_name;
}

//This function is used to get ID Token from frontend
const getIdToken=(headers)=>{
  return headers.Authorization;
}


//export functions
module.exports={
  getResponseHeaders,
  getUserId,
  getUserName,
  getIdToken
}
