import * as express from "express";
import AppRouter from "./routes/customer.route";
const bodyParser = require("body-parser");
// import * as dotenv from "dotenv";
//require('dotenv').config({ path: __dirname+'/.env' });

// dotenv.config({path: __dirname + "/.env"});

if (process.env.NODE_ENV !== "production") require("dotenv").config();


const app = express.default();
const PORT = process.env.PORT || 5000;
const appRouter = new AppRouter();

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", appRouter.appRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
