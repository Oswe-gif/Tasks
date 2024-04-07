import {Response, Request} from 'express'
import taskService from '../services'
import {TaskDTO, TaskResponseDTO} from './dtos/task.dto';
export const taskController ={
    getAllTask: async (req: Request, res: Response) =>{
        try{
            const data:TaskResponseDTO[] = await taskService.getAll();
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
            const task:TaskDTO= req.body;
            const data:TaskResponseDTO = await taskService.create(task);
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
            const data:TaskResponseDTO|null  =  await taskService.getOne(String(req.params.name));
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