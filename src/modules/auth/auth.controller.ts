import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthServices } from "./auth.services";
import { UserDto } from "../users/dto/create-user.dto";

@Controller('login')
export class AuthController {
    constructor (
        private authServices: AuthServices
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    login(@Body() loginUserDto: UserDto){
        return this.authServices.login(loginUserDto)
    }
}