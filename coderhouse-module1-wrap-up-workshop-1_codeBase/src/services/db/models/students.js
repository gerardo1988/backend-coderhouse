//TODO: Implementar Modelo con Mongoose:

import mongoose, { Schema } from 'mongoose';

const studentsCollection = 'estudiantes';

const studentsSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    id: {
        type: String,
        unique: true,
        required: true
    },
    courses:[{
        type: Schema.Types.ObjectId,
        ref: "courses",
        default:[]
    } ]
});

studentsSchema.pre('findOne', function () {
    this.populate("courses.course");
});

export const studentsModel = mongoose.model(studentsCollection, studentsSchema);