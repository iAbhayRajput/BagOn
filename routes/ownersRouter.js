const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === "development"){
router.post("/create", async function (req, res){
    
   let owner = await ownerModel.find();
   if (owner.length > 0) {
    return res
    .status(500)
    .send("You Dont Have Permission To create a new owner");
   }

   let {fullname, email, password} = req.body;

   let createdOwner =  await ownerModel.create({
    fullname,
    email,
    password,
   })

   res.status(201).send(createdOwner);
});
}

router.get("/", function (req, res){
    res.send("Hey! it's working");
});


module.exports =router ;