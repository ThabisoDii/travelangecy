const adminService = require('../service/AdminService')
const bookService = require('../service/BookingService')
import { response } from "express";
import {Request,Response} from "express"
var http = require('http');
const jwt = require('jsonwebtoken');


export const approveTicket = async(req:Request,res:Response): Promise<Response> => {

const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ');
    // Get token from array
    try{

      const bearerToken = bearer[1];
      var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
      var response = await adminService.approveTicket(req);

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

export const declineTicket = async(req:Request,res:Response): Promise<Response> => {

  const bearerHeader = req.headers['authorization'];
  
    if(typeof bearerHeader !== 'undefined') {
  
      const bearer = bearerHeader.split(' ');
      // Get token from array
      try{
  
        const bearerToken = bearer[1];
        var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
        var response = await adminService.declineTicket(req);
  
        if(response != null){
            res.statusCode = 200;
            return res.json(response);
        }else{
            res.statusCode = 500;
            return res.json("failed to decline a ticket");
    
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

export const getApprovalPendingTickets = async(req:Request,res:Response): Promise<Response> => {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ');
    // Get token from array
    
    try{
      const bearerToken = bearer[1];
      var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
      var response = await adminService.getApprovalPendingTickets();

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

export const addFlight = async(req:Request,res:Response): Promise<Response> => {

  const bearerHeader = req.headers['authorization'];
  
    if(typeof bearerHeader !== 'undefined') {
  
      const bearer = bearerHeader.split(' ');
      // Get token from array
      try{
  
        const bearerToken = bearer[1];
        var tokenVerification  = jwt.verify(bearerToken,'shhhhh')
        var response = await adminService.addFlight(req);
  
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