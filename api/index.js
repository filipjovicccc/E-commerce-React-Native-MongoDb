const express = require("express");
const bodyParser = require("body-parser")

const mongoose = require("mongoose");
const crypto = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")

// mongodb+srv://filipjovicccc:<password>@cluster0.siv1ig2.mongodb.net/

mongoose.connect("mongodb+srv://192.168.1.2:8081/filipjovicccc:antropomorfni@cluster0.siv1ig2.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Conected to MongoDB")
}).catch((err)=> {
    console.log("Error conecting to MongoDb", err)
})

app.listen(port, ()=> {
    console.log("Server is running on port", port)
})

const User = require("./models/user")
const Order = require("./models/order")

const sendVerificationEmail = async(email, verificationToken)=>{
    const transporter = crypto.createTransport({
        service: "gmail",
        auth: {
            user: "filipjovicccc@gmail.com",
            pass: "bambalurga"
        }
    });

    const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Please verify your email",
    text: `Please verify your email by clicking on the following link: http://192.168.1.2:8081/verify/${verificationToken}` + verificationToken
    }

    //send the email

    try{
      await transporter.sendMail(mailOptions)
    }catch(error){
        console.log("Error sending verification email", error)
    }
}

Node
app.post("/register", async(req,res)=> {
    try{
      const {name, email, password}= req.body
      const existingUser = await User.findOne({email})
      if(existingUser){
         return res.status(400).json({message:"Email already registered"})
      }


      const newUser = new User({name, email, password})

      newUser.verificationToken = crypto.randomBytes(20).toString("hex");

      await newUser.save()

      //send verification

      sendVerificationEmail(newUser.email, newUser.verificationToken)

    }catch(error){

       console.log("error registering user", error);
       res.status(500).json({message:"Registration failed"}
       )
    }
})


//registraion backend

//endpoid if verifying

app.get("/verify/:token", async(req,res)=> {

    try{
        const token = req.params.token

        //findig user with token

        const user = await User.findOne({verificationToken: token})

        if(!user){
            return res.status(400).json({message: "Invalid verification token"})
        }

        //Mark the user as verified

        user.verified = true
        user.verificationToken = undefined

        await user.save()

        res.status(200).json({message:"Email verified successfully"})
    } catch(error){
        res.status(500).json({message: "Email Verification Failed"})
    }
})
const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex")

    return secretKey
}
const secretKey = generateSecretKey()

//login in the user

app.post("/login", async(req, res)=> {
    try{
     const {email,password}=req.body;
   //cheking if user exists
     const user = await User.findOne({email})
     if(!user){
        return res.status(401).json({message: "Invalid email or password"})
     }
     //checking if the password is correct
if(user.password !== password){
    return res.status(401).json({message: "Invalid or password"})
}

//generate a token

const token = jwt.sign({userId:user._id}, secretKey)

res.status(200).json({token})

    }catch(error){
        res.status(500).json({message: "Login Failed"})
    }
} )

