import express, { Request, Response } from 'express'
import { User, IUser } from '../../models/user'
import { getAllUsers } from '../repositories/usersRepository';

const router = express.Router()



router.get('/api/users', async (req: Request, res: Response) => {
  const user = await getAllUsers();
  console.log("user", user)
  return res.status(200).send(user)
})

router.post('/api/users', async (req: Request, res: Response) => {
  const { title, firstName, surname, email, password } = req.body;

  const todo = User.build({ title, firstName, surname, email, password })
  await todo.save()
  return res.status(201).send(todo)
})

export { router as userRouter }