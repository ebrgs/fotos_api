import { IsNotEmpty, IsString } from "class-validator";
import { User } from "src/modules/users/entity/user.entity";

export class ImageDto {
    @IsNotEmpty()
    @IsString()
    path: string

    user: User
}