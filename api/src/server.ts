import express from 'express'; //
import {createServer} from 'http';
const app=express();
import config from './config'
import db from './models'
const mainServer=createServer(app);

db.on("error",console.error.bind(console,"MongoDB connection error."));
db.on("close",function(){
    console.log("DB connection is close");
});
db.on("open",function(){
    console.log("Connected to MongoDB database.");
})
app.use("/",(req, res) => {
    res.send("API running")
})

const PORT=5000 ;
const HOST='localhost' ;

mainServer.listen(PORT,()=>{
    console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`)
})

export default app;