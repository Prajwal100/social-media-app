import express, { NextFunction, Request, Response } from "express";
import {createServer} from 'http';
import bodyParser from 'body-parser';
import config from './config'
import db from './models'
import cors from 'cors';
import routes from './routes'
interface IError extends Error {
  status?: number;
}
const app=express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:4000",
  "http://localhost:5000",
];

app.use(
    cors({
  credentials: true,
        
      origin: function (origin, callback) {
        if (!origin) {
          callback(null, true);
          return;
        }
        if (allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
  

const mainServer=createServer(app);

db.on("error",console.error.bind(console,"MongoDB connection error."));
db.on("close",function(){
    console.log("DB connection is close");
});
db.on("open",function(){
    console.log("Connected to MongoDB database.");
})

app.use("/api",routes)


app.use((req: Request, res: Response, next: NextFunction) => {
  const error: IError = new Error(`Path doesn't exist ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  console.error(error);
  res.send({
    status: false,
    message: config.app.ENV === "dev" ? error.message : "server error",
    error: config.app.ENV === "dev" ? error : "",
  });
  return;
});

const PORT=5000 ;
const HOST='localhost' ;

mainServer.listen(PORT,()=>{
    console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`)
})

export default app;