import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpRequest {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}