const commando = require('discord.js-commando');
const music = require('discord.js-music');

module.exports = class MusicCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Play a song!'
        });
    }

    async run(message, args){
       music(client);
    }
}