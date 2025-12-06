const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const cookieParser = require("cookie-parser")
dotenv.config(); 


const accountRoutes = require('./router/userRoutes'); 



// db connection 
const connectDB = require('./db/connection/config')
connectDB(); 


app.use(express.json()); 
app.use(cookieParser()); 

const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://crime-navigator-epics.vercel.app'
]

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.some(allowed => origin.includes(allowed))) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// routes 
app.use('/user', accountRoutes); 

const port = process.env.PORT 
app.listen(port || 4044);
