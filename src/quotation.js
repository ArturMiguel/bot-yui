const axios = require('axios')
const moment = require('moment')
const currencies = require('./currencies.json')

moment.locale('pt-br')

module.exports = async (code) => {
    const iDate = moment().subtract('7', 'days').format('MM-DD-YYYY')
    const fDate = moment().format('MM-DD-YYYY')
    const uri = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${code}'&@dataInicial='${iDate}'&@dataFinalCotacao='${fDate}'&$top=100&$format=json&$select=cotacaoCompra,dataHoraCotacao`

    const { data } = await axios.get(uri)
    const quotation = data.value[data.value.length - 1]

    quotation.description = `${currencies[code]} (${code})`
    quotation.price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(quotation.cotacaoCompra)

    quotation.date = moment(quotation.dataHoraCotacao).format('[Cotação de] LLLL[.]')

    delete quotation.cotacaoCompra
    delete quotation.dataHoraCotacao

    return quotation
}
