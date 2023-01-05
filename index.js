import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import clientRoutes from 'routes/client';
import generalRoutes from 'routes/general';
import managementRoutes from 'routes/management';
import salesRoutes from 'routes/sales';

//configuration
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)



