import { log } from "./util.js";
import {urls} from './config.js'


export async function request(data,date,url){
  url = url || getUrl()
  const response = await fetch(url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  const result = await response.json()
  log(date,result.code,url)
  return result
}


let urlIndex = 0
function getUrl(){
  return urls[urlIndex++ % urls.length]
}