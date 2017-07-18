const commando = require('discord.js-commando');

module.exports = class DiceRollCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'roll',
            aliases: ['die', 'dice'],
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die. :game_die:',
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + roll + "! :game_die:");
    }
}