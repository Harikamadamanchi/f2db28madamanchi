const mongoose = require("mongoose") 
const studentSchema = mongoose.Schema({ 
    Student_Name: {
        type: String,
        required:[true, "Name of the Student cannot be empty"]
    },
    Student_Class: {
        type: String,
        required:[true, "Name of the Class cannot be empty"]
    },
    Student_Rank: {
        type: Number,
        required:[true,"Rank of the Student"]
    },
    Student_Age: {
        type: Number,
        required:[true,"Age of the Student"]
    },
    Student_Number: {
        type: Number,
        required:[true,"Number of the Student"]
    }
}) 

module.exports = mongoose.model("Student", studentSchema) 