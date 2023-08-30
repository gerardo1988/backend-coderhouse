import { Router } from 'express';
import mongoose from 'mongoose';
import { studentsModel } from "../services/db/models/students.js"

// Si queremos cambiar de persistencia - solo descomentar/comentar
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
//import StudentService from '../services/filesystem/students.service.js';
import StudentService from '../services/db/students.service.js';

const router = Router();
const studentService = new StudentService();

router.get('/', async (req, res) => {
    try {
        let students = await studentService.getAll();
        res.send({ result: 'success', payload: students });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }

});

router.post('/', async (req, res) => {

    try {

        let { name, lastName, age, id, courses }= req.body;
        let student = await studentService.save({name, lastName, age, id, courses});
        res.status(201).send({ result: 'success', payload: student })
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo crear un estudiante." });
    }
    
});

router.get('/:id', async (req, res) =>{

    try {

        const ids = req.params.id;
        let idStudents= await studentService.findOne(ids);
        res.status(201).send({ result: 'success', payload: idStudents });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo traer los cursos." });
    }

    

});

export default router;