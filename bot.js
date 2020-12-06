var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "784925016662736896" && message.channel.id === "784921371410432050"){
        if(msg.startsWith('Hy', 0)){
            if(msg === prefix + "bang" && message.channel.id === "784921371410432050"){
                message.channel.send('BOOM!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with 'Hy' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
