const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TimeCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'time',
            group: 'random',
            memberName: 'time',
            description: 'Gives some stats on your time. (WIP)'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed().setColor(0x007fed).setTitle("__" + message.author.username + " Time Info__").addField("Your Time", new Date());
        
        message.channel.send({embed});
    }
}