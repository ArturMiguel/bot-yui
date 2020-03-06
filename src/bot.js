require('dotenv').config()
const Discord = require('discord.js')
const help = require('./help')
const cotacao = require('./cotacao')

const bot = new Discord.Client()
const prefix = process.env.PREFIX

bot.on('ready', () => {
    bot.user.setPresence({
        activity: { name: 'Comandos: $help' }
    })
    console.log('Bot ready!')
})

bot.on('message', async (message) => {
    if (message.content.startsWith(prefix, 0)) {
        const arg = message.content.substring(prefix.length).toLocaleLowerCase()
        switch (arg) {
            case 'help':
                help(message)
                break
            case 'dolar':
                await cotacao.usd(message)
                break
            case 'euro':
                await cotacao.eur(message)
                break
            case 'libra':
                await cotacao.gbp(message)
                break
            case 'peso':
                await cotacao.ars(message)
                break
            case 'bitcoin':
                await cotacao.btc(message)
                break
            default: break
        }
    }
})

bot.login(process.env.BOT_TOKEN)
