import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ticket {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column("text")
    departure: string;
    @Column("text")
    arrival: string;
  

    
}