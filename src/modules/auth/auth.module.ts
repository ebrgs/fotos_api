import { Module } from "@nestjs/common";
import { UsersModule } from "../users/users.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthServices } from "./auth.services";
import { TokenStrategy } from "./token.strategy";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: "3h" }
        })
    ],
    providers: [AuthServices, JwtService, TokenStrategy],
    controllers: [AuthController],
    exports: [AuthServices]
})
export class AuthModule {}
