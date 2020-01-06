# Mini Note

**3-Tier Application Architecture**
- The presentation tier is built with Angular and hosted by an S3 bucket
- The business logic tier is built with Lambda function in Node.js.
- The database tier is built with AWS DynamoDB

**Project Introduction**:
* Angular is used to build client-side frontend application, and AWS services are used to build app backend.
* Used AWS services are as following:
  * AWS lambda for serverless,event driven code execution
  * AWS CloudFront to distribute app in order to minimize the latency and ease the traffic
  * AWS Route 53 for domain services
  * AWS IAM for access Control
  * AWS Congito to authenticate user
  * AWS S3 bucket to store frontend layer
  * AWS DynamoDB to store data
  * AWS CodeCommit, CodePipeLine for version control, auto deployment
  * AWS API Gateway for a secured API endpoint 


## Sample Demo Screenshots
### Email Sign up 
![Custom Sign In](Demo/signup.png)

### Social Login 
![Social Page](Demo/login.png)

### Notes Taking
![Social Page](Demo/app.png)

### Notes Editing
![Upload Page](Demo/edit.png)

### Notes Uploading
![All tags](Demo/upload.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Pre-Requisites Setup
You need **Node.js** and **Redux DevTools** prior to installing.
* Install Node.js
    * Install the latest [Node version](https://nodejs.org/en/download/) from
    the Node.js website for your proper OS.
* Install Redux Devtools
    * Install the latest [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) from the Google Chrome extension store.

### Running the Project Locally
With Node and Redux DevTools installed, clone this repository with
```
git clone https://github.com/evanugarte/SmartPhotoCategorizer.git
```

* In Command Prompt:
    1. Go to file location in your machine: `cd SmartPhotoCategorizer`
    2. Install all dependencies with 
    ```
    npm install && cd back-end && npm install
    ```
    3. To run the program:
    * To first start the backend, enter the `back-end` folder and start the
    server with
    ```
    cd back-end && npm start
    ```
    * Then, in the `SmartPhotoCategorizer` folder, run
    ```
      npm run start
    ```
    * The application should open in the browser shortly after.

### Cloud Services
- S3 buckets to hold images and stage website
- DynamoDB tables to store user information and references to photo objects
- Route53 for domain name and routing
- ELB, ASG, and EC2 to host our server and direct traffic
- CloudFront for content delivery
- SNS and CloudWatch for notifications about our system
- Rekognition for label detection on images
- Cognito user pool for user authentication
