const mongoose=require("mongoose");

const feedbackSchema=mongoose.Schema({
    name:String,
    email:String,
    message:String
})

feedback=mongoose.model("feedback",feedbackSchema);

module.exports=feedback;