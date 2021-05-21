import { User } from "../models/User.model";

export default class Utils {

    static checkUserRole(user: User, roles: string[]){
        return roles.includes(user.roles[0].name);
    }
}