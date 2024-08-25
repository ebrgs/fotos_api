import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ImagesServices } from "./images.services";
import { ImageDto } from "./dto/images.dto";
import { TokenAuthGuard } from "../auth/token-auth.guard";

interface iTokenRequest extends Request {
    user: { userId: string};
  }

@Controller('images')
export class ImagesController {
    constructor(
        private readonly imagesServices: ImagesServices
    ) {}

    @Post()
    @UseGuards(TokenAuthGuard)
    upload(@Body() uploadImageDto, @Request() req: iTokenRequest){
        const userId = req.user.userId
        return this.imagesServices.upload(uploadImageDto, userId)
    }

    @Get()
    @UseGuards(TokenAuthGuard)
    findAll(@Request() req: iTokenRequest){
        const user = req.user.userId
        return this.imagesServices.findAll(user)
    }

    @Delete(':publicId')
    @UseGuards(TokenAuthGuard)
    delete(@Param('publicId') id, @Request() req: iTokenRequest){
        const user = req.user.userId
        return this.imagesServices.delete(id, user)
    }
}