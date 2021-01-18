import {Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn} from "typeorm";
import {Flight} from "./Flight";

@Entity()
export class Ticket {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    passanger_email: string;
    @Column()
    isApproved: boolean;
    @OneToOne(type => Flight)
    @JoinColumn()
    flight: Flight;
  

    
}