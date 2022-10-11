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
    const from = ctx.update.message.from.first_name
    console.log(from)
    ctx.reply(`Olá! Seja bem vindo ${from.first_name}!
    Sou um bot de treinamento
    Por enquanto eu:
    - repito o que voce digita
    - digo as coordenadas de latitudes e longitudes se
    - retorno nome e telefone do contato que 
    - ouço uma mensagem de audio e retorno a duração
    - informo a resoluçao das fotos que voce me envia`)
})


/**
 * iniciando o polling com o servidor para verifficar se ha novas mensagens e/ou conversas
 */

bot.startPolling()