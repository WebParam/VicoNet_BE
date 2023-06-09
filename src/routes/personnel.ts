import express, { Request, Response } from 'express'
import { instanceOfTypeCustomError } from '../lib/typeCheck';
import { SearchByKey } from '../services/searchService';
import { AddPersonnel, GetAllPersonnel } from '../repositories/personnelRepository';
import { IPersonnel, IPersonnelDoc } from '../models/personnel';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuidv4 } from 'uuid';

// Configure AWS credentials
AWS.config.update({
  accessKeyId: 'AKIAWZJISUVZLVQKQH5Y',
  secretAccessKey: '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',
});

// Create an S3 instance
const s3 = new AWS.S3() as any;

// Configure multer to use S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'param-hr-resources',
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const fileName = `${uuidv4()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});


const router = express.Router()




router.post('/api/searchPersonnel', async (req: Request, res: Response) => {
  const { searchKey } = req.body;
  const personnel = await GetAllPersonnel();

  if(!instanceOfTypeCustomError(personnel)){
    const _personnel = personnel as IPersonnelDoc[];

    const result = await SearchByKey(searchKey,_personnel)
    console.log("RERE",result)
    return res.status(200).send(result);
  }
})


// router.post('/api/personnel', async (req: Request, res: Response) => {
//   const { searchKeys, information, currentJob, previousWorkExperience, yearsOfExperience, education, keySkills, keyCourses, cvUrl, personalInformation } = req.body;
//   const dbUser = {  searchKeys, information, currentJob, previousWorkExperience, yearsOfExperience, education, keySkills, keyCourses, cvUrl, personalInformation  } as IPersonnel;
  
//   const user = await AddPersonnel(dbUser);
 
//   return res.status(201).send(user)
// })


router.post('/api/personnel', upload.single('file'), async (req: Request, res: Response) => {
  const { searchKeys, information, currentJob, previousWorkExperience, yearsOfExperience, education, keySkills, keyCourses, personalInformation } = req.body;
  const file = req.file; // Access the uploaded file

  const dbUser: IPersonnel = {
    searchKeys,
    information,
    currentJob: JSON.parse(currentJob), // Parse the JSON string to convert it back to an object
    previousWorkExperience: JSON.parse(previousWorkExperience), // Parse the JSON string to convert it back to an array
    yearsOfExperience,
    education: JSON.parse(education), // Parse the JSON string to convert it back to an object
    keySkills,
    keyCourses,
    cvUrl: '', // We'll set this later after uploading to S3
    personalInformation: JSON.parse(personalInformation), // Parse the JSON string to convert it back to an object
  };

  if (file) {
    dbUser.cvUrl = file.location; // Set the S3 URL to the CV URL field in the database user object
  }

  // Perform other operations and save the user to the database
  // ...

  return res.status(201).json(dbUser);
});

export { router as personnelRouter }