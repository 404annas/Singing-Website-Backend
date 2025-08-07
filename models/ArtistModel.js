import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Qawal", "Bhangra"]
    }
}, { timestamps: true })

export default mongoose.model("ArtistModel", artistSchema);