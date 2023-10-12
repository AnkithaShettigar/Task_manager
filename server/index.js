const express = require("express");
const cors = require("cors");
const collection = require("./mongo");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
    }
  } catch (error) {
    res.json("not exists");
    console.log("error", error);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
    cpassword: cpassword,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
      await collection.insertMany([data]);
    }
  } catch (error) {
    res.json("not exists");
    console.log("error", error);
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
  console.log("application is working");
});
app.listen(4000, () => {
  console.log("application started");
});
