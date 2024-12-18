import mongoose from "mongoose";

const UserSchema = new mongoose.Scema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: null,
        },
        rating: {
            type: String,
            default: 3.5,
        },
        price: {
            org: {
                type: String,
                required: true,
            },
            mrp: {
                type: Number,
                required: true,
            },
            off: {
                type: Number,
                required: false,
                default:0,
            },
        },
    },
    {timestamps:true}
);
 

export default mongoose.model("Properties", PropertySchema)