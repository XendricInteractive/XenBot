const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class AboutServerCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'server',
            aliases: ['aboutserver', 'serverinfo'],
            group: 'random',
            memberName: 'server',
            description: 'Info on the server the bot is on.'
        });
    }

    async run(message, args){
        var icon = `${message.guild.iconURL ? message.guild.iconURL : "https://cdn.discordapp.com/embed/avatars/1.png"}`;

        const embed = new discord.RichEmbed().setTitle("__Server Info__").setThumbnail(icon).setColor(0x007fed).addField("Server Name",`${message.guild.name}`, true).addField("Server ID", `${message.guild.id}`, true).addField("Owner", `${message.guild.owner}`, true).addField("Region", `${message.guild.region}`, true).addField("Default Channel", `${message.guild.defaultChannel}`, true).addField("Server Created", `${message.guild.createdAt}`, true).addField("Members", `${message.guild.members.size}`, true).addField("Channels", `${message.guild.channels.size}`, true).addField("Roles", `${message.guild.roles.size}`, true).addField("Custom Emojis", `${message.guild.emojis.size}`, true);
        message.channel.send({embed});
    }
}