import { Router } from 'express';
//import del service repository:
import { getAll, createStudent, update, getOne } from '../controllers/students.controller.js';

const router = Router();

router.get('/getAll', getAll);

router.post('/save', createStudent);

router.post('/update/:id', update);

router.post('/getOne/:id', getOne);

export default router;