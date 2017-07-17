const commando = require('discord.js-commando');
const discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = class SWICommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'swi',
            aliases: ['steamwarsimage', 'swimgae', 'swimg', 'steamwarsimg'],
            group: 'xendric',
            memberName: 'swi',
            description: 'Get a random image from the SteamWars webpage on xendric.net (WIP)'
        });
    }

   

    async run(message){
        var body;
        var roll = Math.floor(Math.random() * 6) + 1;
        if(roll == 4){
            body = await snekfetch.get("http://xendric.net/assets/sw/4.gif");
        } else {
            body = await snekfetch.get("http://xendric.net/assets/sw/1.png");
        }

        const embed = new discord.RichEmbed().setTitle("SteamWars Image").setURL("http://xendric.net/steamwars").setImage(body);
        message.channel.send({embed});
    }
}