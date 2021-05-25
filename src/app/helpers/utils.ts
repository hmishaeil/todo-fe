import { User } from "../models/User.model";

export default class Utils {

    static accessRoles(roles: string[]) {

        const userRole = localStorage.getItem('role');
        roles.forEach(role => {
            console.log(userRole)
            console.log(role)
            console.log(userRole.includes(role))
            if (userRole.includes(role)) {
                return true;
            }
        });

        return false;
    }
}