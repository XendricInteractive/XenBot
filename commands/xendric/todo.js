const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TodoCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'todo',
            aliases: ['upcoming', 'wip', 'wipfeatures'],
            group: 'xendric',
            memberName: 'todo',
            description: 'A list of stuff to add to XenBot.'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed().setColor(0x007fed).setTitle("__XenBot Todo List__").addField("**Misc**","- Music stuff!\n- Maybe more ~~fun~~ random things?").addField("**Xendric**","- Get profile stats from Xendric Interactive games (When the time comes).\n- IDK, other stuff for this game company.");
        message.channel.send({embed});
    }
}