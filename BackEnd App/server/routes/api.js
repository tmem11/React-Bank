const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

// const axios = require('axios').default;
// const url = "https://api.openweathermap.org/data/2.5/weather?q="
// const apiKey = "d927ab8526a956962bdcb2e11429a89b"
// const imgUrl = "http://openweathermap.org/img/w/"



// const urllib = require('urllib');

// router.get('/city/:cityName', async (req, res) => {
//     let cityName = req.params.cityName
//     cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
//     const data = await axios.get(`${url}${cityName}&APPID=${apiKey}`)
//     const cityData = data.data
//     const myCity = new City({
//         name: cityData.name,
//         temperature: cityData.main.temp,
//         condition: cityData.weather[0].description,
//         conditionPic: `${imgUrl}${cityData.weather[0].icon}.png`,
//     }
//     )
//     res.status(200).send(myCity)
// })
router.get('/transactions', async  (req, res) => {
    res.send(await Transaction.find({}))


})
router.post('/transaction',  (req, res) => {
    const newTransaction = req.body
    let transaction = new Transaction({
        vendor: newTransaction.vendor,
        amount: newTransaction.amount,
        category: newTransaction.category
    })
        transaction.save()
        res.send(transaction)
    
    
})
router.delete('/transaction/:transId', async (req, res) => {
    let transId = req.params.transId
    
    res.send(await Transaction.findByIdAndDelete(transId))
})


module.exports = router
