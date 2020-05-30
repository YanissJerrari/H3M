const Discord = require('discord.js')
const bot = new Discord.Client()
process.setMaxListeners(0);


bot.on('message', function (message) {
    if (message.content === 'ça va?') {
      message.channel.send('Oui et toi?') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'ping') {
      message.channel.send('Pong') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'bonne nuit') {
      message.channel.send('Fais de beaux rêves !') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'salut') {
      message.channel.send('Tu vas bien? ') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'oui') {
      message.channel.send('Cool!') 
    }
  })

  

  bot.on('message', function (message) {
    if (message.content === 'je deco') {
      message.channel.send('Au revoir :thumbsup: !') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'mdr') {
      message.channel.send('XD') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'bonjour') {
      message.channel.send('Hey') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'H3M') {
      message.channel.send('On me demande?') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Je vais manger') {
      message.channel.send('Bon appétit !') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'je viens de me réveiller') {
      message.channel.send('Flemmard ! :stuck_out_tongue_winking_eye:') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Qui est le plus beau?') {
      message.channel.send('Pas toi ') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Qui est la plus belle?') {
      message.channel.send('Pas toi ') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'j ai faim') {
      message.channel.send('Bah mange...') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Bonjour') {
      message.channel.send('Hey') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'ça va ?') {
      message.channel.send('Oui et toi') 
    }
  })


  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
  })

  bot.on('message', function (message) {
    if (message.content === 'Ca va?') {
      message.channel.send(':thumbsup: Et toi?') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === ':thumbsup:') {
      message.channel.send('C bien Alors') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Ou ça?') {
      message.channel.send('Je sais pas') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Tu vois?') {
      message.channel.send('Bah nan débile je suis un bot') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Je vais jouer à Fortnite') {
      message.channel.send('Rajoute moi : Light_Yaniss91 ;)') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Qui est ton créateur ?') {
      message.channel.send('Mon créateur est le génial Light_Yaniss91 ;)') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Yo') {
      message.channel.send(':wave:') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Quoi de neuf') {
      message.channel.send('Des ragots...') 
    }
  })


  bot.on('message', function (message) {
    if (message.content === 'Lequel') {
      message.channel.send('Laisse tomber...') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Ok') {
      message.channel.send('Hé hé...') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'Jsp') {
      message.channel.send('Tu sais Pas?') 
    }
  })

  bot.on('message', function (message) {
    if (message.content === 'nn') {
      message.channel.send('Pas grave') 
    }
  })


  


 

 

 




  



  bot.login('NzE1OTE4MjcwNTg2MjkwMjQ3.XtENCw.nBX_NTV3l8NdqoeBUMnQUkyhrXM')