const commando = require('discord.js-commando');

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

    async run(msg, args){
        msg.say("Here's a todo list of stuff to add to XenBot:");
        msg.say("\n- Music!\n- Get profile stats from Xendric Interactive games (When the time comes).\n- Get SteamWars Image command working..\n- Maybe more ~~fun~~ random things?");
    }
}