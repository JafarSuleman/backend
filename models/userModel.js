const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true
        },
        userName: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

