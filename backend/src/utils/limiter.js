import ratelimit from "express-rate-limit"

const limitador = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100, 
    message: {
        message: "demasiados intentos. Vuelva a intentarlo en un momento"
    }, 
    StandardHeaders: true, 
    legacyHeaders: false
}); 

export default limitador; 