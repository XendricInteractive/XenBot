const os = require('os');
const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs');

let json = JSON.parse(fs.readFileSync("./package.json","utf8"));

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
        
        const embed = new discord.RichEmbed().setTitle("__XenBot Info__").setColor(0x007fed).setThumbnail(`${this.client.user.avatarURL}`).addField("Developers", "**__Xendric Interactive__**\n*MCE626* - Lead Programmer\n*Guybot1001* - Graphic Artist", true).addField("Libraries", json.lib, true).addField("Framework", json.framework, true).addField("Bot Version", json.version, true).addField("Bot Prefix", `${this.client.commandPrefix}`, true).addField("Created", "Jul 15, 2017", true).addField("OS", `${os.platform()}`, true);
        message.channel.send({embed});
    }
}