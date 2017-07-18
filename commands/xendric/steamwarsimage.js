const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class SWICommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'swi',
            aliases: ['gwi','steamwarsimage', 'swimgae', 'swimg', 'steamwarsimg'],
            group: 'xendric',
            memberName: 'swi',
            description: 'Get a random image from the SteamWars webpage on *xendric.net*.'
        });
    }

   

    async run(message){
        var body;
        var roll = Math.floor(Math.random() * 9) + 1;
        if(roll == 4){
            body = 'http://xendric.net/assets/sw/4.gif';
        } else {
            body = 'http://xendric.net/assets/sw/' + roll + '.png';
        }

        const embed = new discord.RichEmbed().setTitle("Steam/Gifting Wars Image").setURL("http://xendric.net/steamwars").setImage(body);
        message.channel.send({embed});
    }
}