import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.services";
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { UserDto } from "../users/dto/create-user.dto";

@Injectable()
export class AuthServices {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(loginUserDto: UserDto){
        const user = await this.usersService.findByEmail(loginUserDto.email)

        const isPassValid = await this.usersService.comparePasswords(
            loginUserDto.password,
            user.password
        )

        if(!isPassValid) {
            throw new UnauthorizedException("Invalid email or password")
        }
        const payload =  {
            email: user.email,
            sub: user.id
        }
        const options: JwtSignOptions = { secret: process.env.SECRET_KEY }

        return {
            access_token: this.jwtService.sign(payload, options)
        }
    }
}