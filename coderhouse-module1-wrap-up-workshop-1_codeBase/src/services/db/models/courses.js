//TODO: Completar Modelo con Mongoose:
import mongoose, { Schema } from 'mongoose';

const coursesCollection = 'courses';

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    teacherName: {
        type: String,
        required: true
    },

    students: {
        type: Schema.Types.ObjectId,
        ref:"estudiantes",
        required: true
        
    }

});

// exportar
export const coursesModel = mongoose.model(coursesCollection, courseSchema);