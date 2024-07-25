import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    exprienceInYears: {
        type: Number,
        required: true,
        default: 0
    },
    salary: {
        type: String,
        required: true
    },
    workinHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, { timestamps: true })

export const doctor = mongoose.model("Doctor", doctorSchema)