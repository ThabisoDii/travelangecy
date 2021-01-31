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
    @Column("")
    status: string;//pending approved or decline,if approved the boolean willbe chnaged to true if decline remain false but status change
    @Column("")
    quantity: number;
    @OneToOne(type => Flight)
    @JoinColumn()
    flight: Flight;
  

    
}