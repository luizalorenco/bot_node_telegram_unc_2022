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
    if (from.id != '1450408708') {
    console.log(from.id)
    ctx.reply(`Olá! Seja bem vindo ${from.first_name}!`)

} else {
console.log(from.id)
    ctx.reply(`Olá! Seja bem vindo ${from.first_name}!`)}

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


bot.startPolling()