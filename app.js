const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");

const app = express();

const url = "mongodb://localhost/NewUsers";

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected to the DB");
});

const port = 4000;

app.use(express.json());

app.use("/users", userRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to New World!!!");
// });

app.listen(4000, () => {
  console.log(`app is listening on ${port}`);
});
