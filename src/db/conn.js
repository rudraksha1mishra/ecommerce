const mongoose = require("mongoose");
// creating a database
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/renter" ,{ 
 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection is successful");
}).catch((error)=> {
    console.log(error);
})
