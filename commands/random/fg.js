const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class FSCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'Jävla tyskar',
            group: 'random',
            memberName: 'Jävla tyskar',
            description: 'Jävla tyskar'
        });
    }

    async run(message, args){
        message.channel.send("Ficken Schweden.");
    }
}