const express = require('express');

// routes banane k liye

const { route } = require('express/lib/application');

const Contact = require("../models/Contact");
const Detail = require("../models/Detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');







const routes = express.Router();

routes.get("/", async (req,res) => {

    const details = await Detail.findOne({"_id":"63540c4887d1fd960741d8a7"})
    const slides = await Slider.find()

  //  console.log(slides)

  //  console.log(details)

  const services = await Service.find()
    // res.send("This is message from routes")
    res.render("index", {
        details:details,
        slides:slides,
        services:services
    });
    
});

routes.get('/gallery', async(req,res) => {

    const details = await Detail.findOne({"_id":"63540c4887d1fd960741d8a7"})

    // res.send("gallery")
    res.render("gallery", {
        details:details
    })
})


routes.post("/process-contact-form",async (request,response) =>{
    console.log("form is submitted")
    console.log(request.body)

    // save the data to database
    try{

        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/") // saara kaam khatam hone k baad ye user ko home page par le jayega

    }catch(e)
    {
        console.log(e)
        response.redirect("/") // error aane k baad ye user ko home page par le jayega
    }
})


module.exports=routes;