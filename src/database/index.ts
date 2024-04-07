import exp from 'constants';
import {connect} from 'mongoose';
import {MONGODB_URI} from '../config/index'

export const connectDB =async ()=>{
    try{
        await connect(MONGODB_URI as string);
        console.log('connected to MongoDB')
    }
    catch(error: unknown){
        let errorMessage:string = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
            console.log('error connecting to MongoDB:', errorMessage);
        }
    }
}