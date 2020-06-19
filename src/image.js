const quotation = require('./quotation')
const NekosLife = require('nekos.life')
const axios = require('axios')
const Canvas = require('canvas')
const Discord = require('discord.js')

const neko = new NekosLife()

module.exports = async (code, message) => {
    const quotationData = await quotation(code)

    const imgUri = (await neko.sfw.neko()).url
    const response = await axios.get(imgUri, {
        responseType: 'arraybuffer'
    })

    const image = new Canvas.Image()
    image.src = Buffer.from(response.data, 'binary')

    const canvas = new Canvas.createCanvas(image.width, image.height)
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    alignText(quotationData.price, context, canvas)

    const embed = new Discord.MessageEmbed()
        .setTitle(quotationData.description)
        .setDescription(`[Imagem original](${imgUri})`)
        .setColor('#d3d3d3')
        .setImage('attachment://quotation.jpeg')
        .setFooter(quotationData.date)
    message.channel.send({
        embed: embed,
        files: [new Discord.MessageAttachment(canvas.toBuffer(), 'quotation.jpeg')]
    })
}

function alignText(text, context, canvas) {
    let fontSize = 1000
    context.font = `bold ${fontSize}px Arial`
    while (context.measureText(text).width > canvas.width) {
        context.font = `bold ${fontSize -= 10}px Arial`
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
