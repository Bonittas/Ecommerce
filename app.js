require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router")
const port = 8806;


app.use(express.json());


app.use("/uploads",express.static("./uploads"))
app.use(router)
app.use(
   cors({
   })
  );
 
   app.listen(8806, () => {
    console.log("running server");
 });
      
 app.post("/signup", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    db.execute(
      "INSERT INTO signupp (username,email, password) VALUES (?,?)",
      [username,email, password],
      (err, result)=> {
      console.log(err);
      }
    );
    
 });
 