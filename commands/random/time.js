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
        const nowDate = new Date()
        const embed = new discord.RichEmbed();
        embed.setColor(0x007fed);
        embed.setTitle("__" + message.author.username + " Time Info__");
        embed.addField("Your 24hr Time", date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(), true);
        embed.addField("Date", (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear(), true);
        embed.addField("Day of the Week", date.getDay(), true);
        embed.addField("UTC Time", date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds(), true);
        
        message.channel.send({embed});
    }
}