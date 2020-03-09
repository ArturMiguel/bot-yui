const axios = require('axios')
const moment = require('moment')
const currencies = require('./currencies')

moment.locale('pt-br')

module.exports = async (code) => {
    const { data } = await axios.get(url(code))
    const last = data.value[data.value.length - 1]
    last.descricao = currencies[code]
    last.cotacaoCompra = new Intl.NumberFormat('pt-br', {
        style: 'currency', currency: 'BRL' 
    }).format(last.cotacaoCompra)
    last.dataHoraCotacao = moment(last.dataHoraCotacao).format('DD/MM/YYYY [às] HH:mm:ss')
    return last
}

function url(code) {
    const iDate = moment().subtract('7', 'days').format('MM-DD-YYYY')
    const fDate = moment().format('MM-DD-YYYY')
    return `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${code}'&@dataInicial='${iDate}'&@dataFinalCotacao='${fDate}'&$top=100&$format=json&$select=cotacaoCompra,dataHoraCotacao`
}
