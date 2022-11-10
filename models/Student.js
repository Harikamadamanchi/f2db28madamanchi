const mongoose = require("mongoose") 
const studentSchema = mongoose.Schema({ 
    Student_Name: String,
    Student_Class:String,
    Student_Rank : Number,
    Student_Age :Number,
    Student_Number :Number
}) 

module.exports = mongoose.model("Student", studentSchema) 