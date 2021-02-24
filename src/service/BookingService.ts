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

export const searchFlights = async(req:Request,res:Response): Promise<any> => {
   
    try {
       
        const flightRepository = getRepository(Flight);
        const allFlight = await flightRepository.find({ departure_airport: req.body.departure_airport, arrival_airport: req.body.arrival_airport,departure_date: req.body.departure_date, arrival_date: req.body.arrival_date });
        
        return allFlight;
        
      } catch (error) {
          return error;
      }
}

export const bookFlight = async(req:Request,res:Response): Promise<any> => {

    try {

        //check if the flight is already booked before and do not accept it if it is.look for ticket,if it exist rejects
        //
            const ticktRepository = getRepository(Ticket);

            let ticket = new Ticket();
            ticket.passanger_email = req.body.passanger_email.toLowerCase();
            ticket.isApproved = false;
            ticket.status = "pending",
            ticket.quantity = req.body.quantity;

            let flight = new Flight();
            flight.id = req.body.flight_id
            flight.departure_airport = req.body.departure_airport;
            flight.arrival_airport = req.body.arrival_airport;
            flight.departure_date = req.body.departure_date;
            flight.arrival_date = req.body.arrival_date;

            ticket.flight = flight;
        
            const theTicket = await ticktRepository.save(ticket);
        
        return ticket;
        
      } catch (error) {
          return error;
      }
}

export const getUserApprovedTickets = async(req:any): Promise<any> => {

    var flights: any[]= [];
    try {

        const ticketRepository = getRepository(Ticket);
        const userApprovedTickets = await ticketRepository.find({ relations: ["flight"]});

        userApprovedTickets.forEach(function(item) {

            if(item.status === 'approved' && req.email === item.passanger_email){

                 const formData = { departure_airport :item.flight.departure_airport,departure_time : item.flight.departure_time,departure_date : item.flight.departure_date,
                 arrival_airport : item.flight.arrival_airport, arrival_time : item.flight.arrival_time,arrival_date : item.flight.arrival_date};

                flights.push(formData);
            }
            
        });

         return flights;
        
      } catch (error) {
          return error;
      }
}

export const getUserPendingApprovalTickets = async(req:any): Promise<any> => {

    var flights: any[]= [];
    try {

        const ticketRepository = getRepository(Ticket);
        const userApprovedTickets = await ticketRepository.find({ relations: ["flight"]});

        userApprovedTickets.forEach(function(item) {

            if(item.status === 'pending' && req.email === item.passanger_email){

                 const formData = { departure_airport :item.flight.departure_airport,departure_time : item.flight.departure_time,departure_date : item.flight.departure_date,
                 arrival_airport : item.flight.arrival_airport, arrival_time : item.flight.arrival_time,arrival_date : item.flight.arrival_date};

                flights.push(formData);
            }
            
        });

         return flights;
        
      } catch (error) {
          return error;
      }
}



