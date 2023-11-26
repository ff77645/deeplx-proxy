import chalk from "chalk"

export function log(date,code,url){
  const msg = `${date.toLocaleString()} | ${code} | ${url} | ${Date.now() - date.getTime()}`
  console.log(code ===  200 ? chalk.green(msg) : chalk.red(msg))
}



export function HourMater(flags){
  const date = Date.now()
  const times = {}
  flags.forEach(key=>{
    times[key] = date
  })
  
  return {
    times,
  }

}