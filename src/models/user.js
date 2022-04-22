const mongoose=require("mongoose")
const validator=require("validator")



// defining Structure



const userSchema=mongoose.Schema({
   subject:{
       type:String,
       required:true,
       minLength:3
   }, 
   email:{
       type:String,
       required:true,
       validate(value){
           if(!validator.isEmail(value)){
               throw new Error("Invalid Email ID")
           }
       }
   },
  
   message:{
    type:String,
    required:true,
    minLength:4
}, 

})




// collection


const User =mongoose.model("DynamicUser",userSchema)

// here DynamicUsers will be the name of collection


module.exports=User



