import {Entity, Column, PrimaryColumn,OneToOne, JoinColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Credentials {

    @PrimaryColumn()
    email: string;
    @Column("text")
    passwordd: string;
    
    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    
}