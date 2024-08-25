import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.services";
import { UserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
    constructor(
        private readonly usersServices: UsersService
    ) {}

    @Post()
    create(@Body() createUserDto: UserDto){
        return this.usersServices.create(createUserDto)
    }

    @Get(":id")
    findOne(@Param("id") id: string){
        return this.usersServices.findOne(id)
    }
}