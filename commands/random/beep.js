const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class BeepCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'beep',
            group: 'random',
            memberName: 'beep',
            description: 'Beep boop bop.'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed().setImage("http://i.imgur.com/Tu54A2K.gif");

        message.channel.send("Boop.");
        message.channel.send({embed});
    }
}