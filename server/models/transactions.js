import { Schema, model } from "mongoose";

import { Schema, model } from "mongoose";

const ReviewSchema = new Schema({
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    productID: { type: Schema.ObjectId, required: true, ref: 'Product' },
    date: { Date, required: true }
}, {
    timestamps: true, toJSON: { virtuals: true }
});

ReviewSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
}),
    ReviewSchema.virtual('product', {
        localField: 'productId',
        ref: 'Product',
        foreignField: '_id',
    })

export const Review = model("Review", ReviewSchema);


export const Transaction = model("Transaction", TransactionSchema);
