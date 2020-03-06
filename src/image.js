const Discord = require('discord.js')
const Canvas = require('canvas')
const PixlRequest = require('pixl-request')

const request = new PixlRequest()

module.exports = async (moeda, message) => {
    const imgUrl = await randomImage()
    request.get(imgUrl, (err, res, data) => {
        const image = new Canvas.Image()
        image.src = data
        const canvas = new Canvas.createCanvas(image.width, image.height)
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        canvasText(moeda.buy, context, canvas)
        const painel = new Discord.MessageEmbed()
            .setTitle(`Cotação para ${moeda.name}`)
            .setColor('#d3d3d3')
            .setImage('attachment://cotacao.png')
        message.channel.send({
            embed: painel, files: [new Discord.MessageAttachment(canvas.toBuffer(), 'cotacao.png')]
        })
    })
}

function randomImage() {
    return new Promise((resolve) => {
        request.get('https://nekos.life/api/v2/img/eron', (err, res, data) => {
            const { url } = JSON.parse(data.toString())
            resolve(url)
        })
    })
}

function canvasText(text, context, canvas) {
    let fontSize = 1000
    context.font = `bold ${fontSize}px Arial`
    while (context.measureText(text).width > canvas.width) {
        context.font = `bold ${fontSize-= 10}px Arial`
    }
    // Background
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
