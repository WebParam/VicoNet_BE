import mongoose from 'mongoose'

export interface IUser {
  _id?:string;
  title: string;
  firstName: string;
  surname:string;
  email:string;
  password:string
}

interface userModelInterface extends mongoose.Model<IUserDoc> {
  build(attr: IUser): IUserDoc
}

export interface IUserDoc extends mongoose.Document {
  title: string;
  firstName: string;
  surname:string;
  email:string;
  password:string
}

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  firstName: {
    type: String, 
    required: true
  },
  surname: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
})

userSchema.statics.build = (attr: IUser) => {
  return new User(attr)
}

const User = mongoose.model<IUserDoc, userModelInterface>('user', userSchema, "users")


export { User }




