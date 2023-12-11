import { Router } from 'express';
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
import { getAll, save, update, getOne } from '../controllers/courses.controller.js'
import { addLogger } from '../config/logger.js';

const router = Router();

router.get('/getAll', addLogger, getAll);

router.post('/save', save);

router.post('/update/:id', update);

router.post('/getOne/:id', getOne);


export default router;