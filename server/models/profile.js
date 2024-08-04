import { Schema, model } from "mongoose";

const ProfileSchema = new Schema({
    name: String,
    picture: String,
});

export const Profile = model("Profile", ProfileSchema);
