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

        let flight = await flightRepository.findOne({id: req.body.flightId});
        let ticketToUpdate = await ticketRepository.findOne({ passanger_email: req.body.passanger_email,flight}); //and operator with tyeorm

        if(ticketToUpdate !=null){
            ticketToUpdate.isApproved = req.body.isApproved;

            ticketToUpdate = await ticketRepository.save(ticketToUpdate);

        }
         return ticketToUpdate;
        
      } catch (error) {
          return error;
      }
}