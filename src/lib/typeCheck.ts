import { ICustomError } from "../../models/errors";
import { IPersonnel } from "../../models/personnel";
import { IUser } from "../../models/user";

export function instanceOfTypeIUser(object: any): object is IUser {
    return object._id
}

export function instanceOfTypeCustomError(object: any): object is ICustomError[] {
    return object[0].code
}