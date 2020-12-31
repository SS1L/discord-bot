const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.commands = new Discord.Collection();
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFile){
    const command = require(`./commands/${file}`);
    console.log(command)
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("I'm ready!");
});

client.on('message',  (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'play'){
        client.commands.get('play').execute(message, args);
        console.log('nice')
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login(token);