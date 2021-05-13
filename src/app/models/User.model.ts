import { Role } from "./Role.model";

export class User {
    constructor(
        public email: string,
        public enabled: boolean,
        public verifiedAt: Date,
        public createdAt: Date,
        public roles: Role[],
    ) { }
}