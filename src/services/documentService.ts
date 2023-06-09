
import { IPersonnel, IPersonnelDoc } from "../models/personnel";

import AWS from 'aws-sdk';

// Configure AWS credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});

// Create an S3 instance
const s3 = new AWS.S3();

export const UploadDocument = async function() {
  
  const uploadParams = {
    Bucket: 'YOUR_BUCKET_NAME',
    Key: 'YOUR_OBJECT_KEY',
    Body: 'YOUR_DOCUMENT_CONTENT',
  };
  
  s3.upload(uploadParams, (err:any, data:any) => {
    if (err) {
      console.error('Error uploading document to S3:', err);
    } else {
      console.log('Document uploaded successfully to S3:', data.Location);
    }
  });
  
}
