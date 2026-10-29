import dotenv from "dotenv"

dotenv.config()

export const config = {
    db: {
        URI: process.env.DB_URI
    },
    JWT: {
        SCRET: process.env.JWT_secret_key
    }, 

}