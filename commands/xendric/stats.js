const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client({
    commandPrefix: 'x//'
});

const embed = new discord.RichEmbed().setTitle("XenBot Statistics").addField("Servers", `${bot.guilds.size}`, true).addField("Users", `${bot.users.size}`, true).addField("Command Prefix", `${bot.commandPrefix}`, true);

module.exports = class StatsCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'stats',
            aliases: ['stat'],
            group: 'xendric',
            memberName: 'stats',
            description: 'Gets some stats about XenBot.'
        });
    }

    async run(message, args){
        message.channel.send({embed});
    }
}