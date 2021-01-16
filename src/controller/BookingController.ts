const registerService = require('../service/RegistrationService')
const bookService = require('../service/BookingService')
import { response } from "express";
import {Request,Response} from "express"
var http = require('http');


export const getFlights = async(req:Request,res:Response): Promise<Response> => {

    var response = await bookService.getFlights();
    console.log(response)

    if(response != null){
        res.statusCode = 200;
        return res.json(response);
    }else{
        res.statusCode = 500;
        return res.json("failed to login");

    }
    
}


export const bookFlight = async(req:Request,res:Response): Promise<Response> => {

  var response = await bookService.bookFlight(req);
  console.log(response)

  if(response != null){
      res.statusCode = 200;
      return res.json(response);
  }else{
      res.statusCode = 500;
      return res.json("failed to book a ticket");

  }
  
}