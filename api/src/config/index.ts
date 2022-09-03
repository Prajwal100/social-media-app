import * as dotenv from "dotenv";
dotenv.config();

const config={
    app:{
        NAME:process.env.APP_NAME ,
        ENV:process.env.APP_ENV,
        PORT:process.env.PORT,
        HOST:process.env.HOST ,
        MONGO_URI:process.env.MONGO_URI,
    }
}

export default config;