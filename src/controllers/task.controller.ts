import {Response, Request} from 'express'
import {taskService} from '../services'
export const taskController ={
    getAllTask: async (req: Request, res: Response) =>{
        try{
            const data = await taskService.getAll();
            res.json(data)
        }
        catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                    message: error.message
                })
            }
        }
    },
    createTask: async (req: Request, res: Response) =>{
        try{
            const data = await taskService.create(req.body);
            res.send(data)
        }
        catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                    message: error.message
                })
            }
        }
    },
    getOne: async(req: Request, res: Response)=>{
        try{
            const data =  await taskService.getOne(String(req.params.name));
            res.send(data)
        }
        catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                    message: error.message
                })
            }
        }
    }
}