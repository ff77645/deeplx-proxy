import express from "express";
import {query} from "@ifyour/deeplx";
import {request} from './request.js'
import { log } from "./util.js";

const PORT = 3000;

const app = new express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World')
})

let lastTime = Date.now() 
let requestCount = 0
app.post('/translate',async (req,res)=>{

  let result
  const date = new Date()
  const flag = date.getTime() - lastTime > 2000
  lastTime = date.getTime()
  if(flag || requestCount++ % 4 === 0){
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

