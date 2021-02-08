var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { Ticket } from "../entity/Ticket";
var http = require('http');
import { Flight } from "../entity/Flight";
import { getRepository } from 'typeorm';

export const approveTicket = async(req:Request,res:Response): Promise<any> => {

    try {

        const ticketRepository = getRepository(Ticket);
        const flightRepository = getRepository(Flight);

        console.log(req.body.ticketId+"iiiid")
        //let flight = await flightRepository.findOne({id: req.body.flightId});
        let ticketToUpdate = await ticketRepository.findOne({ id: req.body.ticketId}); //and operator with tyeorm

        if(ticketToUpdate !=null){
            //ticketToUpdate.isApproved = req.body.isApproved;
            ticketToUpdate.isApproved = true;
            ticketToUpdate.status = "approved";
            ticketToUpdate = await ticketRepository.save(ticketToUpdate);

        }
         return ticketToUpdate;
        
      } catch (error) {
          return error;
      }
}

export const declineTicket = async(req:Request,res:Response): Promise<any> => {

    try {

        const ticketRepository = getRepository(Ticket);
      //  const flightRepository = getRepository(Flight);

       // let flight = await flightRepository.findOne({id: req.body.flightId});
        let ticketToUpdate = await ticketRepository.findOne({ id: req.body.ticketId}); //and operator with tyeorm

        if(ticketToUpdate !=null){
            //ticketToUpdate.isApproved = req.body.isApproved;
            ticketToUpdate.isApproved = false;
            ticketToUpdate.status = "declined";
            ticketToUpdate = await ticketRepository.save(ticketToUpdate);

        }
         return ticketToUpdate;
        
      } catch (error) {
          return error;
      }
}

export const getApprovalPendingTickets = async(req:Request,res:Response): Promise<any> => {

    var flights: any[]= [];
    var ticketObject:any;
    try {

        
        const ticketRepository = getRepository(Ticket);
    
        const listOfTicketToApprove = await ticketRepository.find({ relations: ["flight"]}); //and operator with tyeorm

        listOfTicketToApprove.forEach(function(item) {

            if(item.status === 'pending'){

                 const formData = { ticketId :item.id ,departure_airport :item.flight.departure_airport,departure_time : item.flight.departure_time,departure_date : item.flight.departure_date,
                 arrival_airport : item.flight.arrival_airport, arrival_time : item.flight.arrival_time,arrival_date : item.flight.arrival_date};

                flights.push(formData);
            }
            
        });

         return flights;
        
      } catch (error) {
          return error;
      }
}

export const addFlight = async(req:Request,res:Response): Promise<any> => {
   
    try {
       
        const flightRepository = getRepository(Flight);
        const allFlight = await flightRepository.save(req.body);
       
        return allFlight;
        
      } catch (error) {
          return error;
      }
}