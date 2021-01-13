import {Entity, Column, PrimaryGeneratedColumn,PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    email: string;
    @Column()
    name: string;
    @Column("text")
    surname: string;
    @Column()
    userType: string;

    
}