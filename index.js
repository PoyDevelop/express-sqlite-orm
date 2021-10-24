const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// const sequelize = new Sequelize('postgres://user:isylzjko0hk.com:5432/dbpos');
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Product = sequelize.define("products", {
  name: Sequelize.STRING,
  price: Sequelize.DOUBLE,
});

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

var datetime = new Date();



const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Product App"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
