import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address."],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Please enter at least 6 characters."],
  },
  profilePic: String,
  coverPic: String,
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "banned"],
    default: "active",
  },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePic?: string;
  coverPic?: string;
  following?: Array<Number>;
  followers?: Array<Number>;
  isAdmin: string;
  status: string;
}

const User = mongoose.model<IUser>("User", userSchema);

export default User;
