// importando as variaveis de ambiente
const env = require('../.env')

//importando a biblioteca 'Telegfraf'
const { Telegraf } = require('telegraf')

/**
 * criando o objeto bot e o instanciando como um novo objeto da classe 'Telegraf'
 */
const bot = new Telegraf(env.token)

// iniciando o 'bot'
bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Olá! Seja bem vindo ${from.first_name}!`)
})

// dando continuidade a conversa
bot.on('text',async(ctx,next) =>{
    await ctx.reply('Resposta 1')
})

bot.on('text',async(ctx,next) =>{
    await ctx.reply('Resposta 2')
})

bot.on('text',async(ctx,next) =>{
    await ctx.reply('Resposta 3')
})

/**
 * iniciando o polling com o servidor para verifficar se ha novas mensagens e/ou conversas
 */

bot.startPolling()