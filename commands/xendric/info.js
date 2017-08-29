const os = require('os');
const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs');

let json = JSON.parse(fs.readFileSync("./package.json","utf8"));

module.exports = class AboutBotCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'info',
            aliases: ['bot', 'xenbot'],
            group: 'xendric',
            memberName: 'info',
            description: 'About XenBot.'
        });
    }

    async run(message, args){        
        const embed = new discord.RichEmbed();
        embed.setTitle("__XenBot Info__");
        embed.setColor(0x007fed);
        embed.setThumbnail(`${this.client.user.avatarURL}`);
        embed.setDescription("XenBot is a discord bot made by Xendric Interactive, more specifically by the lead programmer *MCE626*." + "\n\n" + "It is a bot that can take your profile stats from Xendric Interactive's games (When the time comes). For now it's just a basic bot to mess around with. *x//help* for list of commands.");
        embed.addField("Developers", "**__Xendric Interactive__**\n*MCE626* - Lead Programmer\n*Guybot1001* - Graphic Artist", true);
        embed.addField("Libraries", json.lib, true);
        embed.addField("Framework", json.framework, true);
        embed.addField("Bot Version", json.version, true);
        embed.addField("Bot Prefix", `${this.client.commandPrefix}`, true);
        embed.addField("Created", "Jul 15, 2017", true);
        embed.addField("OS", `${os.platform()}`, true);
        message.channel.send({embed});
    }
}