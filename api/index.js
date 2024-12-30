const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://SouvikDe:Souvik%402002@ecommerce2.zhd43.mongodb.net/?retryWrites=true&w=majority&appName=ECOMMERCE2",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });
app.listen(port,"172.20.80.1", () => {
  console.log("Server is running on port 8000");
});

const User = require("../models/user");
const Order = require("../models/order");

const sendVerificationEmail = async (email, verificationToken) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure the email service or SMTP details here
    service: "gmail",
    auth: {
      user: "souvikde.yoga@gmail.com",
      pass: "eehj lwgb mwxx sckd",
    },
  });

  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending verification email:", error);
  }
  // // app.get("/health_check", async (req, res) => {
  // //   return 'success'
  // // }
  // // )
  // // }

//   app.post("/register", async (req, res) => {
//     try {
//       const { name, email, password } = req.body;

//       // check if the user is already registered
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         console.log("Email already registered:", email); // Debugging statement
//         return res.status(400).json({ message: "Email already registered" });
//       }

//       // Create a new user
//       const newUser = new User({ name, email, password });

//       // Generate and store the verification token
//       newUser.verificationToken = crypto.randomBytes(20).toString("hex");

//       // Save the user to the database
//       await newUser.save();

//       // Debugging statement to verify data
//       console.log("New User Registered:", newUser);

//       // Send verification email to the user
//       // Use your preferred email service or library to send the email
//       sendVerificationEmail(newUser.email, newUser.verificationToken);

//       res.status(201).json({
//         message:
//           "Registration successful. Please check your email for verification.",
//       });
//     } catch (error) {
//       console.log("Error during registration:", error); // Debugging statement
//       res.status(500).json({ message: "Registration failed" });
//     }
//   });
// };

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create and save the new user
    const newUser = new User({ name, email, password });
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");
    await newUser.save();

    // Send verification email
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message: "Registration successful. Please check your email for verification.",
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
});



//endpoint to verify the email

app.get("/verify/:token",async(req,res)=>{
  try {
    const token = req.params.token;

    //Find the user witht the given verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //Mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch(error){
    res.status(500).json({ message: "Email Verificatioion Failed" });
  }
})}