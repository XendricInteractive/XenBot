const commando = require('discord.js-commando');

module.exports = class SteamWarsCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'steamwars',
            aliases: ['giftingwars', 'giftwars', 'sw'],
            group: 'xendric',
            memberName: 'steamwars',
            description: 'About the SteamWars.'
        });
    }

    async run(message, args){
        message.channel.send("http://xendric.net/steamwars");
    }
}