import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Image } from "./entity/images.entity";
import { ImagesController } from "./images.controller";
import { ImagesServices } from "./images.services";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Image]),
        UsersModule
    ],
    controllers: [ImagesController],
    providers: [ImagesServices],
    exports: [ImagesServices]
})
export class ImagesModule {}