import express from "express";
import request from 'request'
import https from 'https'
// import { request } from "express";

const app = express()
const port = 8081
// var usd_to_pkr;

app.get("/:id(\\d+)" ,(req , res) => {
    var currency = req.params['id'];
    const currencyRates = () => {
        var link = {
            url : 'https://v6.exchangerate-api.com/v6/9acbbb0e25399ca780ff22cb/latest/USD'
        };
        // console.log(link)
        return new Promise((resolve , reject) => {
            request.get(link ,(err, res , body) => {
                if (err){
                    reject(err);
                }
                else{resolve(JSON.parse(body));}
            })
        })
    }
    const totalRupees = () => {
        return new Promise((resolve , reject) => {
            return(currency)
        })
    }
    // let total_amount = currency * usd_to_pkr;
    currencyRates().then((rate) => {
        let currency_rate = rate;
        let usd_to_pkr = currency_rate.conversion_rates.PKR;
        let total_amount = currency * usd_to_pkr;
        // console.log(total_amount)
        console.log(`1 USD is equal to ${usd_to_pkr} Rupees`)
        console.log(`${currency} USD is equal to ${total_amount} Rupees`)
        
        return totalRupees()

    })
    res.end()
    })

app.listen(port,function portRun(){
    console.log(`The port is running on ${port}`);

})
