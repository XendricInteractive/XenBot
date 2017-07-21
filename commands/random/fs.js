const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class FSCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'ficken_schweden',
            group: 'random',
            memberName: 'ficken_schweden',
            description: 'Ficken Schweden'
        });
    }

    async run(message, args){
        message.channel.send("Jävla tyskar.");
    }
}