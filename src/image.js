const Discord = require('discord.js')
const Canvas = require('canvas')
const axios = require('axios')
const cotacao = require('./cotacao')
const NekosLife = require('nekos.life')

const neko = new NekosLife()

module.exports = async (code, message) => {
    const cot = await cotacao(code)
    const imgUrl = (await neko.sfw.neko()).url
    axios.get(imgUrl, { responseType: 'arraybuffer' }).then((res) => {
        const image = new Canvas.Image()
        image.src = Buffer.from(res.data, 'binary')
        const canvas = new Canvas.createCanvas(image.width, image.height)
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        canvasText(cot.cotacaoCompra, context, canvas)
        const embed = new Discord.MessageEmbed()
            .setTitle(`${cot.descricao} (${code})`)
            .setDescription(`[Imagem original](${imgUrl})`)
            .setColor('#d3d3d3')
            .setImage('attachment://cotacao.jpeg')
            .setFooter(`Cotação: Dados abertos do Banco Central do Brasil\nData e horário da cotação: ${cot.dataHoraCotacao}`)
        message.channel.send({
            embed: embed, files: [new Discord.MessageAttachment(canvas.toBuffer(), 'cotacao.jpeg')]
        })
    })
}

function canvasText(text, context, canvas) {
    let fontSize = 1000
    context.font = `bold ${fontSize}px Arial`
    while (context.measureText(text).width > canvas.width) {
        context.font = `bold ${fontSize-= 10}px Arial`
    }
    // Text Background
    context.fillStyle = '#8359A3'
    context.globalAlpha = 0.5
    context.fillRect(0, canvas.height / 2 - (fontSize * 50 / 100), canvas.width, fontSize)
    context.globalAlpha = 1
    // Text
    context.fillStyle = '#fff'
    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.fillText(text, canvas.width / 2, canvas.height / 2)
}
