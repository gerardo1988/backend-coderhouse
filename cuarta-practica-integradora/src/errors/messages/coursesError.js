export const getCoursesErroInfo= (course)=>{
    return `no se pudo enviar la informacion requerida:
              .informacion requeria: ${product}  ` 
}

export const createCourseErroInfo= (course)=>{
    return `no se pudo traer la informacion requerida:
              .informacion requeria: ${course.tilte}, ${course.description}, 
                                        ${course.teacherName}` 
}

export const deleteCourseErroInfo= (id)=>{
    return `no se encontro el curso para eliminar o el parametro pasado es erroneo:
              .dato: ${id}` 
}

export const getOneCourseErroInfo= (id)=>{
    return `no se encontro el curso solicitado o el parametro pasado es erroneo:
              .dato: ${id}` 
}

export const updateCourseErroInfo= (id)=>{
    return `no se encontro el curso solicitado o el parametro pasado es erroneo:
              .dato: ${id}` 
}

