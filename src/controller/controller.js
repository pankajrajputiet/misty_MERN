const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Ram Murti")
})

router.get("/mammi",(req,res)=>{
    res.send("Mamta Lodhi")
})
router.get("/mammi/papa",(req,res)=>{
    res.send("Rupesh Kumar")
})
router.get("/mammi/papa/didi",(req,res)=>{
    res.send("Shristy LOdhi")
})

router.get("/mammi/papa/didi/bhai",(req,res)=>{
    res.send("Rhythm")
})

module.exports = router;