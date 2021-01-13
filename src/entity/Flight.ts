import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Flight {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column("text")
    departure: string;
    @Column("text")
    arrival: string;
    @Column("text")
    departure_time: string;
    @Column("text")
    arrival_time: string;

    
}