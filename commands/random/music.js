const commando = require('discord.js-commando');

module.exports = class MusicCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'music',
            group: 'random',
            memberName: 'music',
            description: 'Music!'
        });
    }

    async run(message, args){
       message.channel.send("WIP");
    }
}