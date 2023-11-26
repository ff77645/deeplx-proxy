import { log } from "./util.js";

export const urls = [
'https://6ftmnsghc6.us.aircode.run/translate',
'https://deeplx-vercel-chi.vercel.app/translate',
'https://deeplxproxy.zeabur.app/translate',
]

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