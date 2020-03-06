const PixlRequest = require('pixl-request')
const image = require('./image')

const request = new PixlRequest()
const hgFinance = `https://api.hgbrasil.com/finance?key=${process.env.HG_TOKEN}`

exports.usd = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { USD } = (JSON.parse(data.toString())).results.currencies
        USD.name = 'Dólar'
        USD.buy = parseFloat(USD.buy).toFixed(2)
        await image(USD, message)
    })
}

exports.eur = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { EUR } = (JSON.parse(data.toString())).results.currencies
        EUR.name = 'Euro'
        EUR.buy = parseFloat(EUR.buy).toFixed(2)
        await image(EUR, message)
    })
}

exports.gbp = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { GBP } = (JSON.parse(data.toString())).results.currencies
        GBP.name = 'Libra Esterlina'
        GBP.buy = parseFloat(GBP.buy).toFixed(2)
        await image(GBP, message)
    })
}

exports.ars = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { ARS } = (JSON.parse(data.toString())).results.currencies
        ARS.name = 'Peso Argentino'
        ARS.buy = parseFloat(ARS.buy).toFixed(2)
        await image(ARS, message)
    })
}

exports.btc = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { BTC } = (JSON.parse(data.toString())).results.currencies
        BTC.name = 'Bitcoin'
        BTC.buy = parseFloat(BTC.buy).toFixed(2)
        await image(BTC, message)
    })
}
