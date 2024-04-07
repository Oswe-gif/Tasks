import express, {type Express} from 'express';
import {PORT} from './config/index'
import morgan from 'morgan';
import {connectDB} from './database';
import {routes} from './routes';
import cors from 'cors'

export class Server{
    private app: Express;
    constructor(){
        this.app=express();
        connectDB();
        this.configuration();
        this.middlewares();
        this.routes();
    }
    configuration(){
        this.app.set('port', PORT || 5000);
        this.app.use(cors());
        this.app.use(express.json())
    }
    listen(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server running on port ${this.app.get('port')}`)
        });
    }
    middlewares(){
        this.app.use(morgan('dev'));
    }
    routes(){
        this.app.use('/api/tasks', routes.TaskRouter);
    }
}