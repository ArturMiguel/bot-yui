require('dotenv').config()
const Discord = require('discord.js')
const help = require('./help')
const image = require('./image')
const currencies = require('./currencies')

const prefix = '#'
const token = process.env.BOT_TOKEN
const bot = new Discord.Client()

bot.on('ready', () => {
    bot.user.setPresence({
        activity: {
            name: `${prefix}help`
        }
    })
    console.log('Bot ready!')
})

bot.on('message', async (message) => {
    if (!message.content.startsWith(prefix, 0) || message.author.bot) return

    const arg = message.content.substring(prefix.length).toUpperCase()
    
    if (currencies[arg]) {
        if (!message.channel.nsfw) {
            return message.channel.send('Não posso enviar imagens nesse canal. Habilite o NSFW!\n`Editar canal > Habilitar canal de conteúdo adulto`')
        }
        await image(arg, message)
    } else if (arg === 'HELP') {
        help(message)
    }
})

bot.login(token)
