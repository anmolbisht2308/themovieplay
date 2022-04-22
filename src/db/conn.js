const mongoose =require ("mongoose")

mongoose.connect("mongodb+srv://<username><password>@cluster0.y8oxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then( ()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log(error);
})

