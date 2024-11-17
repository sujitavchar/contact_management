import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './routes/contactroutes.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();


const corsOptions = {
    origin: '*', 
  };
  
app.use(cors(corsOptions));
  
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});