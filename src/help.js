const Discord = require('discord.js')
const currencies = require('./currencies')

module.exports = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Cotações disponíveis')
        .setColor('#d3d3d3')
    Object.keys(currencies).forEach((c, i) => embed.addField(`$${c}`, currencies[c]))
    message.reply(embed)
}
