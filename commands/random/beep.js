const commando = require('discord.js-commando');

module.exports = class BeepCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'beep',
            group: 'random',
            memberName: 'beep',
            description: 'Beep boop bop.'
        });
    }

    async run(msg, args){
        msg.say("Boop.");
    }
}