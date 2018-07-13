const discord = require('discord.js');
const commando = require('discord.js-commando');

module.exports = class AboutCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'about',
            aliases: ['xendric'],
            group: 'xendric',
            memberName: 'about',
            description: 'About Xendric Interactive.'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed();
        embed.setTitle("__About Xendric__");
        embed.setColor(0xff6300);
        embed.addField("\u007f", `Xendric Interactive is a newly formed game development company. They are working on games.\nIf you wanted to know about *XenBot*, type *${this.client.commandPrefix}info*`);

        message.channel.send({embed});
    }
}