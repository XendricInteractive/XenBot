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
        const embed = new discord.RichEmbed().setTitle(message.author.username + " Time Info").addField("Your Time", "time");
        
        message.channel.send({embed});
    }
}