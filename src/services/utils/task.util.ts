import {TaskResponseDTO} from '../../controllers/dtos/task.dto'

export const filterFild=(task: TaskResponseDTO[]|TaskResponseDTO): TaskResponseDTO[]|TaskResponseDTO=>{
    if(task instanceof Array){
        return task.map(({name, description,status})=>({
            name, 
            description,
            status
        }))
    }
    else{
        const {name, description,status} = task;
        return ({name, description,status});
    }
}