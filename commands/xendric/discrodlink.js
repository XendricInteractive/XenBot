const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class DiscordLinkCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'servers',
            aliases: ['link', "discord"],
            group: 'xendric',
            memberName: 'servers',
            description: 'Links to Xendric\'s Discord servers.'
        });
    }

    async run(message, args){        
        const embed = new discord.RichEmbed();
        embed.setTitle("__Xendric Servers__");
        embed.setColor(0x007fed);
        embed.addField("Bot Discord", "https://discord.gg/cKVHVDX", true);
        embed.addBlankField();
        embed.addField("Community Discord", "http://discord.gg/zsGzmWc", true);
        message.channel.send({embed});
    }
}