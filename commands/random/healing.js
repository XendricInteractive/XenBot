const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class HealingCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'needhealing',
            group: 'random',
            memberName: 'healing',
            description: 'I need healing.'
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 2) + 1;
        var troll = Math.floor(Math.random() * 4) + 1;
        var body, tbody;

        if(roll == 1){
            body = "https://i.imgur.com/VTH9Qf5.jpg";
        } else {
            body = "https://i.imgur.com/rswAmsJ.jpg";
        }
        const embed = new discord.RichEmbed().setColor(0xfedc57).setImage(body);

        if(troll == 1)
            tbody = "You really should take better care of yourself.";
        else if(troll == 2)
            tbody = "Would you like the sponge or the spray?";
        else if(troll == 3)
            tbody = "Take two, and call me in the morning.";
        else if(troll == 4)
            tbody = "Verstanden.";

        message.channel.send(tbody);
        message.channel.send({embed});
    }
}