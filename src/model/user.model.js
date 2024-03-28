import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
 {
  name: {
   type: String,
   required: true,
  },

  phoneNumber: {
   type: String,
   required: [true, "Phone Number must be required.."],
   minLength: 10,
   maxLength: 10
  },

  city: {
   type: String,
   required: [true, "city is must required..."]
  },

  description: {
   type: String,
   default: ""
  },
 },
 {
  timestamps: true
 }
)


export const User = mongoose.model("User", userSchema);