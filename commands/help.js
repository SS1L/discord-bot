const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Help menu',
    execute(message, args){
        let helpEmband = new MessageEmbed()
        .setColor('#1ed760')
        .setTitle('Help command')
        .setDescription('To get help with a specific command just enter the name of the command.')
        .addFields(
            { name: 'Playback', value: ['play', 'next', 'previous', 'pause', 'repeat', 'playAlbum'], inline: true},
            { name: 'Spotify', value: ['login', 'logout'], inline: true},
            { name: 'For authorized users', value: ['playLiked', 'showPlaylist', 'playPlaylist'], inline: true },
        )
        return message.channel.send(helpEmband);
    },
};