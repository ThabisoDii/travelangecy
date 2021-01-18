var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { Ticket } from "../entity/Ticket";
var http = require('http');
import { Flight } from "../entity/Flight";
import { getRepository } from 'typeorm';

export const getFlights = async(req:Request,res:Response): Promise<any> => {

    try {

        const flightRepository = getRepository(Flight);
        const allFlight = await flightRepository.find();
        
        return allFlight;
        
      } catch (error) {
          return error;
      }
}


export const bookFlight = async(req:Request,res:Response): Promise<any> => {

    try {

            const ticktRepository = getRepository(Ticket);

            let ticket = new Ticket();
            ticket.passanger_email = req.body.passanger_email.toLowerCase();
            ticket.isApproved = req.body.isApproved;

            let flight = new Flight();
            flight.id = req.body.flight_id
            flight.departure_airport = req.body.departure_airport;
            flight.arrival_airport = req.body.arrival_airport;
            flight.departure_time = req.body.departure_time;
            flight.arrival_time = req.body.arrival_time;

            ticket.flight = flight;
        
            const theTicket = await ticktRepository.save(ticket);
        
        return ticket;
        
      } catch (error) {
          return error;
      }
}



