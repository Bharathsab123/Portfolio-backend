import mongoose,{Schema} from "mongoose"

const userschema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        default:""
        
    }
})

const User=mongoose.model("User",userschema)
export {User}