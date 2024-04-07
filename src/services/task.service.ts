import {TaskModel} from '../models';

export const taskService={
    async getAll(){
        return await TaskModel.find()
    },
    async create(task: Object){
        return await TaskModel.create(task);
    },
    async getOne(name: string){
        return await TaskModel.find({name: name})
    }
    
}