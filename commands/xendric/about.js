const commando = require('discord.js-commando');

module.exports = class AboutCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'about',
            aliases: ['xendric', 'aboutxendric'],
            group: 'xendric',
            memberName: 'about',
            description: 'About Xendric Interactive.'
        });
    }

    async run(message, args){
        message.channel.send("Xendric Interactive is a newly formed game development company. They are working on games.");
        message.channel.send("If you wanted to know about XenBot, type *x//info*");
    }
}