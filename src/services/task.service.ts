import {TaskModel} from '../models';
import {TaskDTO,TaskResponseDTO} from '../controllers/dtos/task.dto' 
import {filterFild} from './utils/task.util'

const getAll=async():Promise<TaskResponseDTO[]>=>{
    const foundTask:TaskResponseDTO[]=await TaskModel.find()
    return filterFild(foundTask) as TaskResponseDTO[];
}
const create =async(task: TaskDTO): Promise<TaskResponseDTO>=>{
    const createdTask:TaskResponseDTO=await TaskModel.create(task);
    return filterFild(createdTask) as TaskResponseDTO;
}
    
const getOne =async (name: string): Promise<TaskResponseDTO|null>=>{
    const foundTask:TaskResponseDTO|null = await TaskModel.findOne({name: name});
    if(foundTask){
        return filterFild(foundTask) as TaskResponseDTO;
    }
    return foundTask;
}

export default {
    getAll,
    create,
    getOne
}//exporto un objeto con los metodos
    
