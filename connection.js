const mongoose=require("mongoose")
exports.connect=()=>{
    try{
        mongoose.connect("MONGO_URL");
    }catch(err){
        console.log(err)
    }
    
}
//mongodb://localhost:27017/bloodbank
