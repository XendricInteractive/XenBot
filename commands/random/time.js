const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TimeCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'time',
            group: 'random',
            memberName: 'time',
            description: 'Gives some stats on your time.'
        });
    }

    async run(message, args){
        const date = new Date();
        const embed = new discord.RichEmbed();

        embed.setColor(message.guild.me.colorRole.hexColor);
        embed.setTitle(`__${message.author.username}'s Time Info__`);
        embed.addField("Your 24hr Time", date.toTimeString(), true);
        embed.addField("Date", (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "\n" + date.toDateString(), true);
        embed.addField("Day of the Week", (date.getDay() + 1), true);
        embed.addField("UTC Time", date.toUTCString(), true);
        
        message.channel.send({embed});
    }
}