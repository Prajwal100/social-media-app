import mongoose from "mongoose";
import config from '../config';
const MONGO_URI=config.app.MONGO_URI;

mongoose.set("debug",config.app.ENV==="dev")
mongoose.connect(MONGO_URI).catch((e)=>console.error(e));

const db=mongoose.connection

export default db;