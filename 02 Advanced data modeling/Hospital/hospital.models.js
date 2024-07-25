import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    spacializedIn: [
        {
            type: string
        }
    ]
})

export const hospital = mongoose.model("Hospital", hospitalSchema)