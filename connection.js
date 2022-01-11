const mongoose=require("mongoose")
exports.connect=()=>{
    try{
        mongoose.connect("mongodb+srv://Akshay:Akshay@cluster0.u7akf.mongodb.net/bloodbank?retryWrites=true&w=majority");
    }catch(err){
        console.log(err);
    }
    
}
//mongodb://localhost:27017/bloodbank
