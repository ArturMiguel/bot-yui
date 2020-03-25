const Discord = require('discord.js')
const currencies = require('./currencies')

const prefix = process.env.BOT_PREFIX

module.exports = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Cotações disponíveis')
        .setColor('#d3d3d3')
    Object.keys(currencies).forEach((c, i) => embed.addField(`${prefix}${c}`, currencies[c]))
    message.reply(embed)
}
