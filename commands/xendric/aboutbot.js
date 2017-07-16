const commando = require('discord.js-commando');

module.exports = class AboutBotCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'aboutbot',
            aliases: ['bot', 'xenbot'],
            group: 'xendric',
            memberName: 'aboutbot',
            description: 'About XenBot.'
        });
    }

    async run(msg, args){
        msg.say("XenBot is a discord bot made by Xendric Interactive, more specifically by the lead programmer *MCE626*.");
        msg.say("It is a bot that can take your profile stats from Xendric Interactive's games (When the time comes). For now it's just a basic bot to mess around with.");
    }
}