import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(120)
    email: string
    
    @IsNotEmpty()
    @IsString()
    password: string
}