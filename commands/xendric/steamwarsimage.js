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
        var roll = Math.floor(Math.random() * 11) + 1;
        if(roll == 4){
            body = 'http://xendric.net/assets/sw/4.gif';
        } else {
            body = 'http://xendric.net/assets/sw/' + roll + '.png';
        }

        const embed = new discord.RichEmbed();
        embed.setColor(0x007fed);
        embed.setTitle("__Steam/Gifting Wars Image__");
        embed.setURL("http://xendric.net/steamwars");
        embed.setImage(body);
        message.channel.send({embed});
    }
}