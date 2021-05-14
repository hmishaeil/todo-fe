import { Identifiers } from "@angular/compiler";
import { Role } from "./Role.model";

export class User {
    constructor(
        public id: number,
        public email: string,
        public enabled: boolean,
        public verifiedAt: Date,
        public createdAt: Date,
        public roles: Role[],
        public internalNote: string,
    ) { }
}