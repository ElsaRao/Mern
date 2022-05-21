import express from "express";
import fetch from 'node-fetch'
const app = express();
const port = 8000;

app.get('/:id(\\d+)',(req,res)=>{

    const get_Api = () => {
        fetch('https://v6.exchangerate-api.com/v6/a789f791dd126d85c5f0981b/latest/USD').then(res => res.json()).then(json => {
            const currency = json.conversion_rates.PKR;
            let usd_currency = req.params.id;
            let usd_to_pkr = currency * usd_currency;
            console.log(`${usd_currency} USD is equal to RS ${usd_to_pkr}`);
            res.send(`${usd_currency} USD is equal to RS ${usd_to_pkr}`);
            // console.log(usd_to_pkr);
        })
    }


    async function async_call(){
        const result = await get_Api()
    }
    async_call()
    
})
app.listen(port)