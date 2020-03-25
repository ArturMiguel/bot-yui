require('dotenv').config()
const Discord = require('discord.js')
const help = require('./help')
const image = require('./image')
const currencies = require('./currencies')

const prefix = process.env.BOT_PREFIX
const token = process.env.BOT_TOKEN
const bot = new Discord.Client()

bot.on('ready', () => {
    bot.user.setPresence({ 
        activity: {
            name: `Comandos: ${prefix}help`
        } 
    })
    console.log('Bot ready!')
})

bot.on('message', async (message) => {
    if (!message.content.startsWith(prefix, 0) || message.author.bot) return
    const arg = message.content.substring(prefix.length).toUpperCase()
    if (currencies[arg]) {
        if (!message.channel.nsfw) return message.reply(' a imagem pode ser sensível para alguns usuários. Utilize esse comando em canais *NSFW*  :eyes:')
        await image(arg, message)
    } else if (arg === 'HELP') {
        help(message)
    }
})

bot.login(token)
