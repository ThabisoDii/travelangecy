import express from "express"
import cors from "cors"
import routes from "./routes/routes"
import {createConnection} from "typeorm"

const app = express()

createConnection().then(connection => {
    console.log("Example !!!!")
}).catch(error => console.log(error));


app.use(express.json());
app.use(cors());
//app.options("*",cors());
app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Methods","Origin,X-Requested, Content-Type,Accept,Authorization,x-access-token");
    next();
});
app.use(routes);
//db.connectDB();


app.listen(3000, () => console.log("Example app listening on port 3000!"))
