var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { User } from "../entity/User";
const bcrypt = require("bcrypt")
var http = require('http');
import { Credentials } from "../entity/Credentials";
import { getRepository } from 'typeorm';
const jwt = require('jsonwebtoken');


export const signIn = async(req:Request,res:Response): Promise<any> => {

    try {

        const userLoginRepository = getRepository(Credentials);
        const userRepository = getRepository(User);

        let userLogin = await userLoginRepository.findOne({ email: req.body.email.toLowerCase()});
        
        if(userLogin == null){
            return userLogin;
        }else{

            if(await bcrypt.compare(req.body.passwordd,userLogin.passwordd)){

                let userDetails = await userRepository.findOne({ email: req.body.email.toLowerCase()});
                
                var token = jwt.sign({ userDetails }, 'shhhhh');

                return token;
            }

        } 
      } catch (error) {
          return error;

          //travel-agency.c4hzilvdafwf.us-east-2.rds.amazonaws.com
      }

    
}


