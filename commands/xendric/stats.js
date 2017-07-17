const commando = require('discord.js-commando');
const discord = require('discord.js');

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
        const embed = new discord.RichEmbed().setTitle("XenBot Statistics").addField("Servers", `${this.client.guilds.size}`, true).addField("Users", `${this.client.users.size}`, true);
        message.channel.send({embed});
        message.channel.send(`${this.client.guilds.name}`);
    }
}