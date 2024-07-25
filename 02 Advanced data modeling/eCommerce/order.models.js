import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
        default: 'PENDING'
    }
}, { timestamps: true })

export const order = mongoose.model("Order", orderSchema)