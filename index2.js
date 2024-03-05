const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()

dotenv.config()

app.use(cors())

const fetchDataFromApi1 = async () => {
   return await "huge data 1";
}

const fetchDataFromApi2 = async () => {
    return await "huge data 2";
 }

const promise1 = new Promise((resolve, reject) => {
    if(fetchDataFromApi1()){
        resolve(fetchDataFromApi1())
    }
    else{
        reject("error from api 1")
    }
})

const promise2 = new Promise((resolve, reject) => {
    if(fetchDataFromApi2()){
        resolve(fetchDataFromApi2())
    }
    else{
        reject("error from api 2")
    }
})

Promise.race([promise1, promise2]).then(arrayofResult => 
    {console.log(arrayofResult)}).catch((err) => 
    {console.log(err)})



app.listen(process.env.PORT, () => {
    console.log("server running  " + process.env.PORT)
})