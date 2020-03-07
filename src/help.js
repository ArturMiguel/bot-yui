const Discord = require('discord.js')

module.exports = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Cotações disponíveis')
        .addField('$dolar', 'Cotação do dólar (USD)')
        .addField('$euro', 'Cotação do euro (EUR)')
        .addField('$libra', 'Cotação da libra esterlina (GBP)')
        .addField('$peso', 'Cotação do peso argentino (ARS)')
        .setColor('#d3d3d3')
        .setFooter('https://github.com/ArturMiguel/discord-bot', 'https://github.com/fluidicon.png')
    message.channel.send(embed)
}
