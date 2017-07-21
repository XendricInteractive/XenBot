const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class FSCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'jävla_tyskar',
            group: 'random',
            memberName: 'jävla_tyskar',
            description: 'Jävla tyskar'
        });
    }

    async run(message, args){
        message.channel.send("Ficken Schweden.");
    }
}