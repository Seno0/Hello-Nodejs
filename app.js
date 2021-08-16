//__"Import Express"_______________________________________________________________________________________________________
const express = require("express");
const app = express();

//__"dotenv"_______________________________________________________________________________________________________
const dotenv = require("dotenv");
dotenv.config();

//__Express Body Parser_______________________________________________________________________________________________________
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//__Default Routes_______________________________________________________________________________________________________
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome on nodejs",
  });
});

app.all("*", (req, res) =>
  res.status(404).json({
    statusText: "Not Found",
    message: "Route doesn't exist, please check youre Route again.",
  })
);

//__App Listen_______________________________________________________________________________________________________
app.listen(process.env.PORT || 8080, () => {
  console.log(`SERVER IS RUNNING`);
});
