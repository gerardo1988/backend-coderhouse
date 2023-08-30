import { studentsModel } from "./models/students.js"
import mongoose from 'mongoose';


//TODO: Implementar las operaciones CRUD:
export default class StudentService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentsModel.find();
        return students.map(student => student.toObject());
    }

    save = async (student) => {
        let result = await studentsModel.create(student);
        return result;
    }

    findOne = async(id) =>{

        let student = await studentsModel.findOne({ _id: mongoose.Types.ObjectId(id)})
        return student;
    }

}
