import { Identifiers } from "@angular/compiler";
import { Role } from "./Role.model";
import { Todo } from "./Todo.model";

export class User {
    constructor(
        public id: number,
        public username: string,
        public enabled: boolean,
        public verifiedAt: Date,
        public createdAt: Date,
        public roles: Role[],
        public todos: Todo[],
        public internalNote: string,
    ) { }
}