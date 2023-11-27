import express from "express";
import {query} from "@ifyour/deeplx";
import { log } from "./util.js";

const PORT = 5050

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/translate", (req, res) => {
  res.end('Please use post method to request')
});

app.post('/translate',async(req,res)=>{
  const date = new Date();
  const result = await query(req.body)
  res.json(result)
  log(date,result.code,'localhost')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});