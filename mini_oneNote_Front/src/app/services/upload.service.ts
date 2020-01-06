import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  FOLDER = '/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAVWRF4PARSUSVD2IE',
        secretAccessKey: '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',
        region: 'us-west-2'
      }
    );

    const params = {
      Bucket: 'upload172',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      alert('Successfully uploaded file.');
      return true;
    });
  }
}
