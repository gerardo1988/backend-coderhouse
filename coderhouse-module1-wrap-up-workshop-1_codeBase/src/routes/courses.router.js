import { Router } from 'express';

// Si queremos cambiar de persistencia - solo descomentar/comentar
// import CourseService from '../services/filesystem/courses.service.js';
import CourseService from '../services/db/courses.service.js';

const router = Router();
const coursesService = new CourseService();

router.get('/', async (req, res) => {
    try {
        let courses = await coursesService.getAll();
        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los los cursos." });
    }

})

router.post('/', async (req, res) => {

    try {

        let { title, description, teacherName, students }= req.body;
        let course = await coursesService.save({title, description, teacherName, students});
        res.status(201).send({ result: 'success', payload: course })
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo crear el curso." });
    }
    

});

export default router;