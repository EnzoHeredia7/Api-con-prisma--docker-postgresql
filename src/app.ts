import dotenv from 'dotenv';
dotenv.config()
import  express  from 'express';
import authRoutes from './routes/authRoutes'

const app = express();


//usamos un middleword
app.use(express.json())


//routes
app.use('/auth', authRoutes) 
//autenticacion
//user



export default app 