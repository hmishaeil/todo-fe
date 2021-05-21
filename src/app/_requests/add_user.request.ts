import { Role } from "../models/Role.model";

export class AddUserRequest {
    username: string;
    enabled: boolean;
    roles: Role[];
    internalNote: string;
}