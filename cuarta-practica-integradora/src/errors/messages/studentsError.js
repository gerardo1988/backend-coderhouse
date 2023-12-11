export const getStudentsErroInfo= (student)=>{
    return `no se pudo enviar la informacion requerida:
              .informacion requeria: ${student}  ` 
}

export const createStudentErroInfo= (student)=>{
    return `no se pudo traer la informacion requerida:
              .informacion requeria: ${student.tilte}, ${student.description}, 
                                        ${student.teacherName}` 
}

export const getOneStudentErroInfo= (id)=>{
    return `no se encontro el estudiante solicitado o el parametro pasado es erroneo:
              .dato: ${id}` 
}

export const updateStudentErroInfo= (id)=>{
    return `no se encontro el estudiante solicitado o el parametro pasado es erroneo:
              .dato: ${id}` 
}

