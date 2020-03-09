require('dotenv').config()
const Discord = require('discord.js')
const help = require('./help')
const image = require('./image')
const currencies = require('./currencies')

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
        const arg = message.content.substring(prefix.length).toUpperCase()
        if (currencies[arg]) await image(arg, message)
        else if (arg === 'HELP') help(message)
    }
})

bot.login(process.env.BOT_TOKEN)
