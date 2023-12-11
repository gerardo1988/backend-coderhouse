export default class StudentsRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () =>{
        return this.dao.getAll();
    }
    createStudent = (student) =>{
        return this.dao.save(student);
    }
    update = (id,student) =>{
        return this.dao.updateStudent(id,student);
    }
    findByUsername = async (username) => {
        return this.dao.findByUsername(username);
    };
};