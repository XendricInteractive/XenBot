const commando = require('discord.js-commando');
const discord = require('discord.js');

const embed = new discord.RichEmbed().setTitle("XenBot Info").addField("Developer", "**__Xendric Interactive__**\n*MCE626* - Lead Programmer\n*Guybto1001* - Graphic Artist", true).addField("Framework", "discord.js\ndiscord.js-commando", true).addField("Language", "JavaScript", true).addField("Bot Version", "0.0.5", true).addField("Bot Prefix", "x//", true);

module.exports = class AboutBotCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'info',
            aliases: ['bot', 'xenbot', 'aboutbot'],
            group: 'xendric',
            memberName: 'info',
            description: 'About XenBot.'
        });
    }

    async run(message, args){
        message.channel.send("XenBot is a discord bot made by Xendric Interactive, more specifically by the lead programmer *MCE626*.");
        message.channel.send("It is a bot that can take your profile stats from Xendric Interactive's games (When the time comes). For now it's just a basic bot to mess around with.");
        message.channel.send({embed});
    }
}