const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, "Please enter a company name"],
            maxlength: 255,
        },
        position: {
            type: String,
            required: [true, "Please provide position"],
            maxlength: 255,
        },
        status: {
            type: String,
            enum: ["Interview", "Declined", "Pending"],
            default: "Pending",
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: [true, "Please provide a user"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
