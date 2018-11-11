const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs');

let json = JSON.parse(fs.readFileSync("./package.json","utf8"));

module.exports = class StatsCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'stats',
            aliases: ['stat'],
            group: 'xendric',
            memberName: 'stats',
            description: 'Gets stats about XenBot.'
        });
    }

    async run(message, args){
        const embed = new discord.RichEmbed();
        embed.setTitle("__XenBot Statistics__");
        embed.setColor(0x007fed);
        embed.addField("Servers", `${this.client.guilds.size}`, true);
        embed.addField("Users", `${this.client.users.size}`, true);
        embed.addField("Channels", `${this.client.channels.size}`, true);
        embed.addField("Bot Created", `${this.client.user.createdAt}`, true);
        message.channel.send({embed});
    }
}