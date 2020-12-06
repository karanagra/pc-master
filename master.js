const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  var sender = message.author; //The person who sent the message
    var msg = message.content;
  if (message.author.id != "784925016662736896" && message.channel.id === "784921371410432050" && message.content === `${config.prefix}ping`) {
    message.reply('Pong!');
  }
  if (message.author.id != "784925016662736896" && message.channel.id === "784921371410432050" && message.content === `${config.prefix}av`) {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL({dynamic : true}));
  }
});

bot.login(config.token);
