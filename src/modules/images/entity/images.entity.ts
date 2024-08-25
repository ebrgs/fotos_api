import { User } from "src/modules/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('images')
export class Image {
    @PrimaryGeneratedColumn('increment')
    id: string

    @Column()
    url: string
    
    @Column()
    publicId: string

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User
}