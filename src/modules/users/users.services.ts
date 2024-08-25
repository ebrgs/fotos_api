import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    async create(createUserDto: UserDto): Promise<any> {
      try {
        const hashedPass = await bcrypt.hash(createUserDto.password, 10)

        const user = this.usersRepository.create({
            ...createUserDto,
            password: hashedPass
        })

        await this.usersRepository.save(user)

        return await this.findOne(user.id)
      }
      catch {
        throw new ConflictException("Email already registered!")
      }
    }

    async findOne(id: string): Promise<User> {
        const user = await this.usersRepository
          .createQueryBuilder('user')
          .where('user.id = :id_user', { id_user: id })
          .getOne();
        if (!user) {
          throw new NotFoundException(`User not found`)
        }
    
        return user;
      }
      async findByEmail(email: string): Promise<User> {
        const user = await this.usersRepository
          .createQueryBuilder('user')
          .where('user.email = :email_user', { email_user: email })
          .getOne();
        if (!user) {
          throw new NotFoundException(`User not found`);
        }
        return user;
      }

      async comparePasswords(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
      }
}