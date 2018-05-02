const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class BeepCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'beep',
            aliases: ['boop'],
            group: 'random',
            memberName: 'beep',
            description: 'Beep boop bop.'
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 2) + 1;
        var body;

        if(roll == 1){
            body = "https://i.imgur.com/80GLLyC.gif";
        } else {
            body = "https://i.imgur.com/NFkkSaY.gif";
        }
        const embed = new discord.RichEmbed().setColor(0x007fed).setImage(body);

        message.channel.send("Boop.");
        message.channel.send({embed});
    }
}