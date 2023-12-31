import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import route from './routes';
import { Request, Response } from 'express-serve-static-core';
import { NextFunction } from 'connect';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(route);

app.use((error: Error, request: Request, response: Response, next: NextFunction) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message : error.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.listen(3333, () =>{
    console.log('Serve iniciado na porta 3333');
});

export {app};
