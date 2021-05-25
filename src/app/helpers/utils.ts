export default class Utils {

    static accessRoles(roles: string[]) {

        let hasAccess = false;

        const userRole = localStorage.getItem('role');
        roles.forEach(role => {
            if (userRole.includes(role)) {
                hasAccess = true;
                return; 
            }
        });

        return hasAccess;
    }
}