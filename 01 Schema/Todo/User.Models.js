import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: "uuid",
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isActive: Boolean
}, { timestamps: true })

export const User = mongoose.model("user", UserSchema)

// when this "user" name goes to data base it will automaticaly converted to "users" it converted lowercase and pural form