var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { User } from "../entity/User";
const bcrypt = require("bcrypt")
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

        const flightRepository = getRepository(Flight);
        
        const allFlight = await flightRepository.find();
        
            return allFlight;
        
      } catch (error) {
          return error;
      }
}


/*export const getFlights = async(req:Request,res:Response): Promise<any> => {

    try {

        const userLoginRepository = getRepository(Credentials);
        const userRepository = getRepository(User);


        const allFlights = await repository.find();
        
        if(userLogin == null){
            return userLogin;
        }else{

            if(await bcrypt.compare(req.body.passwordd,userLogin.passwordd)){
                let userDetails = await userRepository.findOne({ email: req.body.email.toLowerCase()});
                return userDetails;
            }

        } 
      } catch (error) {
          return error;
      }

    
}*/


