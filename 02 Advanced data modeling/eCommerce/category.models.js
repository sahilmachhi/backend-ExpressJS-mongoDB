import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    }
})

export const category = mongose.model("Category", categorySchema)