const mongoose = require('mongoose')
const connectMongoDb = async () => {

    const connectionUrl = ""

    try{
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("Database connection succesful");
        
    }catch(error){
        console.log(error.message);
        process.exit(1)
        
    }
}


module.exports = connectMongoDb; 