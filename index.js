const express = require ('express');
const path = require('path');
const bodyParser = require("body-parser");
const connectMongoDb = require("./init/mongoDb");
const todoRoute = require("./routes/todo");
const dotenv = require('dotenv')


const PORT = process.env.PORT || 3000;

dotenv.config();

//init app
const app = express();
connectMongoDb();


//view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", todoRoute);


//listen to server
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    
})