import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },  
    avatar: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    domain: {
        type: String,
        required: true,
        trim: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("users", userSchema);
