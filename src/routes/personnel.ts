import express, { Request, Response } from 'express'
import { User, IUser } from '../../models/user'
import { AddUser, GetAllUsers, GetUserById, UpdateUser } from '../repositories/usersRepository';
import { LoginUser } from '../services/loginService';
import { instanceOfTypeCustomError } from '../lib/typeCheck';
import { SearchByKey } from '../services/searchService';
import { GetAllPersonnel } from '../repositories/personnel';
import { IPersonnel } from '../../models/personnel';

const router = express.Router()



router.get('/api/searchPersonnel', async (req: Request, res: Response) => {
  const { searchKey } = req.body;
  const personnel = await GetAllPersonnel();
  if(!instanceOfTypeCustomError(personnel)){
    const _personnel = personnel as IPersonnel[];
    const result = SearchByKey(searchKey,_personnel)
    return res.status(200).send(Object.keys(result));
  }
})

export { router as personnelRouter }