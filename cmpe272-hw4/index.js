const express = require("express");
const serverless = require("serverless-http");

const app = express();

const quotes = require("./data.json")

app.use(express.json());

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

app.get("*", (req, res) =>{
  try{
    var RandomNumber = getRandomInt(0, 54)
    res.json({message: quotes[RandomNumber]})
  }
  catch(error){
    res.status(201).json({error: error})
  }
})


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
