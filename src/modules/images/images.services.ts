import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { v2 as cloudinary } from "cloudinary"
import { Image } from "./entity/images.entity"
import { Repository } from "typeorm"
import { UsersService } from "../users/users.services"
import { ImageDto } from "./dto/images.dto"

cloudinary.config({
    cloud_name: "ddziipofa",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

@Injectable()
export class ImagesServices {
    constructor(
        @InjectRepository(Image) private imgRepository: Repository<Image>,
        private usersServices: UsersService
    ) {}

    async upload(uploadImageDto, userId: string): Promise<Image> {
        const user = await this.usersServices.findOne(userId)

        const result = await cloudinary.uploader.upload(uploadImageDto.path)

        const dataImage = {
            publicId: String(result.public_id),
            url: String(result.url)
        }

        const image = this.imgRepository.create({ ...dataImage, user: user})

        await this.imgRepository.save(image)

        return await this.findOne(image.publicId)
    }

    async findOne(id: string): Promise<Image> {
        const image = await this.imgRepository
          .createQueryBuilder('image')
          .where('image.publicId = :id_image', { id_image: id })
          .leftJoinAndSelect('image.user', 'user')
          .getOne();
    
        if (!image) {
          throw new NotFoundException(`Image not found`);
        }
    
        return image;
      }
    
    async findAll(userId: string): Promise<Image[]> {
        const images = await this.imgRepository
          .createQueryBuilder('image')
          .where('image.userId = :user_id', { user_id: userId})
          .leftJoinAndSelect('image.user', 'user')
          .getMany()
        
          if (!images) {
            throw new NotFoundException('Images not found')
          }
          return images
    }

    async delete(publicId: string, userId: string) {
        const image = await this.findOne(publicId)
        if ((await image).user.id != userId) {
            throw new UnauthorizedException("This is not your image")
        }

        const deletedImage = cloudinary.uploader.destroy(publicId)

        await this.imgRepository.delete(image.id)

        return deletedImage
    }
}
