import {Router} from 'express';
import {taskController} from '../controllers';
const router = Router();

router.get('/', taskController.getAllTask);
router.post('/', taskController.createTask)
router.get('/:name', taskController.getOne)

export default router //como lo exporto por defecto no deben usar los {}, y colocar otros nombres en el import