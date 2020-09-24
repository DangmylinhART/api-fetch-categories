const fetch  = require ('node-fetch')
let city = 'new york'
let key = require('./key.js')

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`

fetch(url)
.then((data)=> data.json())
.then((data1) => {
    console.log(data1)
})
.catch((err) =>  console.log(err) )
   
