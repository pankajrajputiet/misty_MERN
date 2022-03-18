const port = require("./config/config").PORT;
const url = require("./config/config").URL_DB;
const express = require("express");
const http = "http://localhost:7000";
const router = require("./controller/controller");
const app = express();

app.use("/",router)

app.listen(port,()=>{
    console.log(`server is running at ${http}`)
})