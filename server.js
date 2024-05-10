const { log } = require("console");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("view"));

const usernameDB = "hussainmohammed";
const passwordDB = "123";



app.post("/login",(req, res)=>{
   const {username, password} = req.body;


   if(username === usernameDB && password === passwordDB){
    res.send("Login successfull");
   }else{
    res.send("Login failed");
   }

});




const PORT = process.env.PORT || 3001

app.listen(PORT);