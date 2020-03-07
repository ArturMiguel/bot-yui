const PixlRequest = require('pixl-request')
const image = require('./image')

const request = new PixlRequest()
const hgFinance = `https://api.hgbrasil.com/finance?key=${process.env.HG_TOKEN}`

exports.usd = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { USD } = (JSON.parse(data.toString())).results.currencies
        USD.name = 'Dólar'
        USD.buy = formatCurrency(USD.buy)
        await image(USD, message)
    })
}

exports.eur = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { EUR } = (JSON.parse(data.toString())).results.currencies
        EUR.name = 'Euro'
        EUR.buy = formatCurrency(EUR.buy)
        await image(EUR, message)
    })
}

exports.gbp = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { GBP } = (JSON.parse(data.toString())).results.currencies
        GBP.name = 'Libra Esterlina'
        GBP.buy = formatCurrency(GBP.buy)
        await image(GBP, message)
    })
}

exports.ars = (message) => {
    request.get(hgFinance, async (err, res, data) => {
        const { ARS } = (JSON.parse(data.toString())).results.currencies
        ARS.name = 'Peso Argentino'
        ARS.buy = formatCurrency(ARS.buy)
        await image(ARS, message)
    })
}

function formatCurrency(c) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(c)
}