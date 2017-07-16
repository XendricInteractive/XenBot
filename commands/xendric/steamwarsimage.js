const commando = require('discord.js-commando');
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

   

    async run(msg){
        var roll = Math.floor(Math.random() * 6) + 1;
        const {body} = await snekfetch.get('http://xendric.net/assets/sw/' + roll + '.png');
        msg.say(body.file);
    }
}