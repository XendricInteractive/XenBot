const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TodoCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'todo',
            group: 'xendric',
            memberName: 'todo',
            description: 'A list of stuff to add to XenBot.'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed();
        embed.setColor(0x007fed);
        embed.setTitle("__XenBot Todo List__");
        embed.addField("- Maybe more ~~fun~~ random things?");
        embed.addField("**Xendric**","- Get profile stats from Xendric Interactive games (When the time comes).\n" + "- IDK, other stuff for this game company.");
        message.channel.send({embed});
    }
}