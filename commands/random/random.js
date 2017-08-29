const commando = require('discord.js-commando');

module.exports = class RandomCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'random',
            aliases: ['rand'],
            group: 'random',
            memberName: 'random',
            description: 'Does a random command from the *Random* category and the *swi* command.  (WIP)',
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 3) + 1;
        if(roll == 1){
            //beep.run();
        } else if(roll == 2){
            //dice.run();
        } else if (roll == 3){
            //swi.run();
        }
    }
}