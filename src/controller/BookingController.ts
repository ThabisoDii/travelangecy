const registerService = require('../service/RegistrationService')
const bookService = require('../service/BookingService')
import { response } from "express";
import {Request,Response} from "express"
var http = require('http');
const jwt = require('jsonwebtoken');


export const getFlights = async(req:Request,res:Response): Promise<Response> => {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ');
    // Get token from array
    
    try{

      const bearerToken = bearer[1];
      var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
      var response = await bookService.getFlights();

      if(response != null){
          res.statusCode = 200;
          return res.json(response);
      }else{
          res.statusCode = 500;
          return res.json("failed to get flights");
  
      }

    }catch(err){

      // if token is not valie
      return  res.sendStatus(403);
    }
  } else {
    // Forbidden
   return  res.sendStatus(403);
  }

}

export const searchFlights = async(req:Request,res:Response): Promise<Response> => {
    // you can seach and view flights without logging in
    // Get token from array
    
    try{

      var response = await bookService.searchFlights(req);

      if(response != null){
        
          res.statusCode = 200;
          return res.json(response);
      }else{
          res.statusCode = 500;
          return res.json("failed to get flights");
  
      }

    }catch(err){

      // if token is not valie
      res.statusCode = 500;
      return res.json("something went wrong");
    }
  

}

export const addFlight = async(req:Request,res:Response): Promise<Response> => {
  // you can seach and view flights without logging in
  // Get token from array
  
  try{

    var response = await bookService.addFlight(req);

    if(response != null){
      
        res.statusCode = 200;
        return res.json(response);
    }else{
        res.statusCode = 500;
        return res.json("failed to add flight");

    }

  }catch(err){

    // if token is not valie
    res.statusCode = 500;
    return res.json("something went wrong");
  }


}


export const bookFlight = async(req:Request,res:Response): Promise<Response> => {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ');
    // Get token from array
    
    try{

      const bearerToken = bearer[1];
      var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
      var response = await bookService.bookFlight(req);

      if(response != null){
          res.statusCode = 200;
          return res.json(response);
      }else{
          res.statusCode = 500;
          return res.json("failed to book a ticket");
  
      }

    }catch(err){

      // if token is not valie
      return  res.sendStatus(403);
    }
  } else {
    // Forbidden
   return  res.sendStatus(403);
  }
  
}