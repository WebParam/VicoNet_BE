import mongoose from 'mongoose'

export interface IPersonnel {
  _id?:string;
  searchKeys:string
}

interface personnelDocInterface extends mongoose.Model<IPersonnelDoc> {
  build(attr: IPersonnel): IPersonnelDoc
}

export interface IPersonnelDoc extends mongoose.Document {
  searchKeys:string
}

const personnelSchema = new mongoose.Schema({
  searchKeys: {
    type: String,
    required: true
  }
})

personnelSchema.statics.build = (attr: IPersonnel) => {
  return new User(attr)
}

const User = mongoose.model<IPersonnelDoc, personnelDocInterface>('personnel', personnelSchema, "personnel")


export { User }




