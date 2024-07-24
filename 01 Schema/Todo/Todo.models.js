import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean,
    id: "uuid",
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", TodoSchema)

// when this "Todo" name goes to data base it will automaticaly converted to "todos" it converted lowercase and pural form