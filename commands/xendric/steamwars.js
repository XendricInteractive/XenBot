const commando = require('discord.js-commando');

module.exports = class SteamWarsCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'steamwars',
            aliases: ['giftingwars', 'giftwars'],
            group: 'xendric',
            memberName: 'steamwars',
            description: 'About the SteamWars.'
        });
    }

    async run(msg, args){
        msg.say("http://xendric.net/steamwars");
    }
}