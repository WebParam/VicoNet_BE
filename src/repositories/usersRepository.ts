import { IUser, User } from "../../models/user";

export const getAllUsers= async function():Promise<IUser[]>{
    const users = await User.find({})
    return users as IUser[];
  
  }