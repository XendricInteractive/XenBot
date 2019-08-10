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
        embed.addBlankField();
        embed.addField("Developers", "**__Xendric Interactive__**\n*MCE626* - Programmer\n*Guybot1001* - Graphic Artist", true);
        embed.addField("Libraries", json.lib, true);
        embed.addField("Framework", json.framework, true);
        embed.addField("Bot Version", json.version, true);
        embed.addField("Bot Prefix", `${this.client.commandPrefix}`, true);
        embed.addField("Bot Created", `${this.client.user.createdAt}`, true);
        embed.addField("OS", `${os.platform() + " (" + os.arch() + ")"}`, true);
        embed.addBlankField();
        embed.addField("Links", "*XenBot Server:* https://discord.gg/cKVHVDX \n*Xendric Interactive Server:* http://discord.gg/zsGzmWc", true);

        message.channel.send({embed});
    }
}