var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { User } from "../entity/User";
import { Credentials } from "../entity/Credentials";
var http = require('http');
import { createConnection, getConnection,getRepository } from 'typeorm';


export const registerUser = async(req:Request,res:Response): Promise<any> => {


    if(req.body != null){

        const userRepository = getRepository(User);
        const credentialsRepository = getRepository(Credentials);
        
        let user = new User();
        user.email = req.body.email;
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.userType = req.body.userType;

        let credentials = new Credentials();
        credentials.email = req.body.email;
        credentials.passwordd = req.body.passwordd;
        credentials.user = user;

        try {
            user = await userRepository.save(user);
            credentials = await credentialsRepository.save(credentials);
            return credentials;
          } catch (error) {
              console.log(req.body)
            console.log(error)
          }

        
    }else{
        
        return req.body;

    }
    
}


/*

    // create a photo
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.isPublished = true;

    // create a photo metadata
    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = "cybershoot";
    metadata.orientation = "portrait";
    metadata.photo = photo; // this way we connect them

    // get entity repositories
    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    // first we should save a photo
    await photoRepository.save(photo);

    // photo is saved. Now we need to save a photo metadata
    await metadataRepository.save(metadata);

    // done
    console.log("Metadata is saved, and relation between metadata and photo is created in the database too");

}).catch(error => console.log(error));

*/