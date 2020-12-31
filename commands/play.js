module.exports = {
    name: 'play',
    description: 'Play music from Spotify',
    execute(message, args) {
        message.channel.send('Play some music');
    },
};