import { IMongoError } from "../models/errors";
import { IPersonnel, IPersonnelDoc, Personnel } from "../models/personnel";
import { GenerateSearchKeys } from "../services/searchService";

export const GetAllPersonnel= async function():Promise<IPersonnelDoc[] | IMongoError>{
    try{
        const personnel = await Personnel.find({})
        return personnel as IPersonnelDoc[];
        }catch(e){
            return e as IMongoError;
        }
}

export const AddPersonnel = async function(_personnel:IPersonnel):Promise<IPersonnelDoc | IMongoError> {
    try{
        const searchKeys = GenerateSearchKeys(_personnel);
        const populated = {..._personnel, searchKeys:searchKeys};
        const personnel = Personnel.build(populated);
        await personnel.save()
        return personnel;
    }catch(e){
        return e as IMongoError;
    }
}



