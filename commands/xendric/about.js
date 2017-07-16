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

    async run(msg, args){
        msg.say("Xendric Interactive is a newly formed game development company. They are working on games.");
        msg.say("If you wanted to know about XenBot, type *.aboutbot*");
    }
}