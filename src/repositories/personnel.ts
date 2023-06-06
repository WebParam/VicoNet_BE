import { IMongoError } from "../../models/errors";
import { IPersonnel } from "../../models/personnel";
import { IUser, IUserDoc, User  } from "../../models/user";

export const GetAllPersonnel= async function():Promise<IPersonnel[] | IMongoError>{
    try{
    //const personnel = await Personnel.find({})
    return [] as IPersonnel[];
    }catch(e){
        return e as IMongoError;
    }
  
}


