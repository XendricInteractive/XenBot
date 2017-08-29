const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class AboutServerCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'server',
            group: 'random',
            memberName: 'server',
            description: 'Info about the server the bot is on.'
        });
    }

    async run(message, args){
        var icon = `${message.guild.iconURL ? message.guild.iconURL : "https://cdn.discordapp.com/embed/avatars/1.png"}`;

        const embed = new discord.RichEmbed();
        embed.setTitle("__Server Info__");
        embed.setThumbnail(icon);
        embed.setColor(0x007fed);
        embed.addField("Server Name",`${message.guild.name}`, true);
        embed.addField("Server ID", `${message.guild.id}`, true);
        embed.addField("Owner", `${message.guild.owner}`, true);
        embed.addField("Region", `${message.guild.region}`, true);
        embed.addField("Default Channel", `${message.guild.defaultChannel}`, true);
        embed.addField("Server Created", `${message.guild.createdAt}`, true);
        embed.addField("Members", `${message.guild.members.size}`, true);
        embed.addField("Channels", `${message.guild.channels.size}`, true);
        embed.addField("Roles", `${message.guild.roles.size}`, true);
        embed.addField("Custom Emojis", `${message.guild.emojis.size}`, true);
        message.channel.send({embed});
    }
}