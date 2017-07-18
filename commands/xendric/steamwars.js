const commando = require('discord.js-commando');

module.exports = class SteamWarsCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'steamwars',
            aliases: ['giftingwars', 'giftwars', 'sw', 'gw'],
            group: 'xendric',
            memberName: 'steamwars',
            description: 'About the Steam/Gifting Wars.'
        });
    }

    async run(message, args){
        message.channel.send("http://xendric.net/steamwars");
    }
}