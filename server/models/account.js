import { Schema, model } from "mongoose";

const AccountSchema = new Schema({
    name: String,
    email: String,
    picture: String
});

export const Account = model("Account", AccountSchema);
