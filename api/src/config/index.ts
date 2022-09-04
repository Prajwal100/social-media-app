import * as dotenv from "dotenv";
dotenv.config();

const config={
    app:{
        NAME:process.env.APP_NAME ,
        ENV:process.env.APP_ENV,
        PORT:process.env.PORT,
        HOST:process.env.HOST ,
        MONGO_URI:process.env.MONGO_URI,
    },
    jwt:{
        SECRET:process.env.JWT_SECRET || 'djflakdfldkflasdkfja;lkfjdjladf',
        ISSUER:process.env.JWT_ISSUER || "social-media-app",
        TOKEN_TTL:process.env.JWT_TOKEN_TTL || '1d'
    }
}

export default config;