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
        embed.setTitle("__Xendric Discord Servers__");
        embed.setColor(0xff6300);
        embed.addField("Xenbot Dev Testing Discord", "https://discord.gg/cKVHVDX", true);
        embed.addBlankField();
        embed.addField("Xendric Interactive Community Discord", "http://discord.gg/zsGzmWc", true);
        message.channel.send({embed});
    }
}