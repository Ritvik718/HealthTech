const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/userModels");
const UserData = require("./models/dataModel");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require("openai");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    dbName: "medical",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
// Routes
app.get("/api", (req, res) => {
  res.send("Hello");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/api/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "An error occurred while signing up" });
  }
});
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const existingUser = await User.findOne({ email });

    // Check if the user exists
    if (!existingUser) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare the password with the hashed password
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (passwordMatch) {
      // Generate JWT token
      const token = jwt.sign({ userId: existingUser._id }, process.env.SECRET, {
        expiresIn: "1h", // Token expiration time
      });

      return res.status(200).json({ message: "Logged In", token });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while signing in" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post(
  "/api/submit-form",
  upload.fields([{ name: "image" }, { name: "prescription" }]),
  async (req, res) => {
    try {
      const { age, height, weight, symptoms, name } = req.body;

      const userData = new UserData({
        age: parseInt(age),
        height: parseInt(height),
        weight: parseInt(weight),
        symptoms,
        name,
        image: req.files["image"][0].path,
        prescription: req.files["prescription"][0].path,
      });

      // Save FormData to MongoDB
      await userData.save();

      res.status(201).json({ message: "Form data saved successfully" });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while saving form data" });
    }
  }
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

app.post("/api/recommendation", async (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).send({ error: "Symptoms are required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `i have "${symptoms}". What is the most likely illness that I have and what is the test to confirm it. the output should be in JSON format with matchedDiseases having the array of likely illness and recommendedTests having an array of tests?`,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const data = response.choices[0].message.content;
    console.log(data);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred" });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is Activated on http://localhost:${PORT}`);
});
