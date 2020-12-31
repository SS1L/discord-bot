module.exports = {
    name: 'play',
    description: 'Play music from Spotify',
    execute(message, args) {
        return message.channel.send('Play some music');
    },
};