import { studentService } from '../services/repository/services.js';
import Customerror from '../errors/CustomError.js';
import EErrors from '../errors/errorsEnum.js';
import { getStudentsErroInfo, createStudentErroInfo, getOneStudentErroInfo, updateStudentErroInfo } from '../errors/messages/studentsError.js';


export const getAll = async (req, res) => {
    try {
        let students = await studentService.getAll();
        if(!students){
            Customerror.createError({
                name: "Get student error",
                cause:  getStudentsErroInfo("lista de estudiantes"),
                message: "error al traer los estudiantes",
                code: EErrors.DATABASE_ERROR
            })
        }
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.code, message: error.message});
    }
}


export const createStudent = async (req, res) => {
    try {
        let result = await studentService.createStudent(req.body);
        Customerror.createError({
            name: "Create student error",
            cause: createStudentErroInfo({title, description,teacherName}),
            message: "error al crear un curso",
            code: EErrors.INVALID_TYPES_ERROR
        });
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.code, message: error.message});
    }
}

export const update= async (req, res)=>{

    try {
        
        let student = req.body;
        let _id = req.params._id;
        let result = await studentService.update(_id,student);
        Customerror.createError({
            name: "Update student error",
            cause: updateStudentErroInfo(_id),
            message: "error al actualizar un estudiante",
            code: EErrors.INVALID_TYPES_ERROR
        });
        res.status(202).send(result);
    
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.code, message: error.message});
    }
}

export const getOne = async (req,res) =>{

    try {

        let username = req.body.username;
        let result = await studentService.findByUsername(username);

        if(!result){
            Customerror.createError({
                name: "get student by username error",
                cause: getOneStudentErroInfo(username),
                message: "error al tratar de traer un estudiante",
                code: EErrors.INVALID_TYPES_ERROR
            });
        }

        res.status(200).send(result)
        
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.code, message: error.message});
    }
  
}
