const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class FSCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'Ficken Schweden',
            group: 'random',
            memberName: 'Ficken Schweden',
            description: 'Ficken Schweden'
        });
    }

    async run(message, args){
        message.channel.send("Jävla tyskar.");
    }
}