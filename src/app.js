const express = require("express")
const hbs = require("hbs")

const app = express();

const mongoose = require("mongoose")

const bodyParser = require('body-parser') // for fetching data of form which user will send
/*
app.get("/",(request,response)=>{
    response.send("wow this is data from server") // khuch data bhejna hai toh response use karenge , agar koi data aayega toh request ka use karnge
})
// "/" it is used for making url
*/

const routes = require('./routes/main') // waha se jo export karega wo yaha aa jayega (main.js   module.exports=routes)

const Detail = require("./models/Detail")

const Slider = require("./models/Slider")

const Service=require("./models/Service")


app.use(bodyParser.urlencoded({
    extended:true
}))

//   /static/css/style.css
app.use('/static',express.static("public"))  // public folder k ander jitni bhi resources un sabko access karne k liye
app.use('',routes)



// template engine
app.set('view engine','hbs')
app.set("views","views") // __dirname jo hai wo current directory ka path deta hai wo bhi parent folder ka isliye use nahi kiye

// for passing partials
hbs.registerPartials("views/partials")

// database connection
mongoose.connect("mongodb://localhost/Coven_Services",()=>{
    console.log("Database connected")

    /*

    Service.create([
        {
            icon:'fa-solid fa-heart',
            title:'Provide best chef',
            description:'No one will be more hungry now',
            linkText:'http://www.instagram.com',
            link:'Check'
        },
        {
            icon:'fa-solid fa-shield-halved',
            title:'Provide best maid',
            description:'No one will be more hungry now',
            linkText:'http://www.instagram.com',
            link:'Learn'
        },
        {
            icon:'fa-solid fa-heart',
            title:'Provide best ChildTaker',
            description:'No one will be more hungry now',
            linkText:'http://www.instagram.com',
            link:'Child'
        }
    ])

    */
   
    /* // it was for one time
    Slider.create([
        {
            title:'Learn java in very easy manner',
            subTitle:'java is very easy language',
            imageUrl:"/static/images/bg1.jpg"
        },
        {
            title:'Learn C++ in very easy manner',
            subTitle:'C++ is very easy language',
            imageUrl:"/static/images/image.jpg"
        },
        {
            title:'Learn Python in very easy manner',
            subTitle:'Python is very easy language',
            imageUrl:"/static/images/images3.webp"
        },
    ])
*/










// iss method ko ek baar hin chalana tha ek baar database me le jaane k liye
/*
    Detail.create({
        brandName:"CovenServices",
        brandIconUrl:"https://play-lh.googleusercontent.com/-W2A6cq_GmfS7TO4QmBAFvq_rhe4cn-26Csu8gLxEyxGuzMvLVT-Ruxc3BhfdDChGGU=w240-h480-rw",
        links:[
            {
                label : "Home",
                url:"/"
            },
            {
                label : "Services",
                url : "/services"
            },
            {
                label : "Gallery",
                url : "/gallery"
            },
            {
                label : "About",
                url : "/about"
            },
            {
                label : "Contac tUs",
                url : "/contact-us"
            }
        ]
    })
    */
})


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
});