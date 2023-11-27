import express from "express";
import {query} from "@ifyour/deeplx";
import {request} from './request.js'
import { log } from "./util.js";
import {urls,localPort as PORT} from './config.js'

const app = new express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World')
})

let lastTime = Date.now() 
let requestCount = 0
const urlLenght = urls.length + 1

app.post('/translate',async (req,res)=>{

  let result
  const date = new Date()
  const time = date.getTime()
  const lowFrequency = time - lastTime > 5000
  lastTime = time
  console.log({lowFrequency});
  if(lowFrequency || requestCount++ % urlLenght === 0){
    result = await query(req.body)
    log(date,result.code,'http://localhost')
  }else{
    result = await request(req.body,date)
  }
  res.status(result.code).json(result)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

