import express from 'express'; //
import {createServer} from 'http';
import bodyParser from 'body-parser';
import config from './config'
import db from './models'

import routes from './routes'

const app=express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const mainServer=createServer(app);

db.on("error",console.error.bind(console,"MongoDB connection error."));
db.on("close",function(){
    console.log("DB connection is close");
});
db.on("open",function(){
    console.log("Connected to MongoDB database.");
})

app.use("/api",routes)

const PORT=5000 ;
const HOST='localhost' ;

mainServer.listen(PORT,()=>{
    console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`)
})

export default app;