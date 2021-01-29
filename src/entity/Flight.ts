import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Flight {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column("text")
    departure_airport: string;
    @Column("text")
    arrival_airport: string;
    @Column("date")
    departure_date: Date;
    @Column("date")
    arrival_date: Date;
    @Column("text")
    departure_time: Date;// timestamp type
    @Column("text")
    arrival_time: Date;
    
    

    
}