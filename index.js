const express = require ('express');

const PORT = 3000;

//init app
const app = express();

//view engine
app.set("view engine", "ejs")

//listen to server
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    
})