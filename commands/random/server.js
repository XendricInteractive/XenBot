const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class AboutServerCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'server',
            group: 'random',
            memberName: 'server',
            description: 'Info about the server the bot is on or from a server id.',
            args: [
                {
                    key: "id",
                    prompt: "What server info do you want to see?\n",
                    type: "string",
                    default: ''
                }
            ],
            throttling: {
                usages: 2,
                duration: 3
            }
        });
    }

    async run(message, args){
        const id = args.id || message.guild.id;
        const server = args.id || message.guild;

        if(server.available === true){
            let icon = `${server.iconURL ? message.guild.iconURL : "https://cdn.discordapp.com/embed/avatars/1.png"}`;
            let afkTime = server.afkTimeout / 60;

            const embed = new discord.RichEmbed();
            embed.setTitle("__Server Info__");
            embed.setThumbnail(icon);
            embed.setColor(0x007fed);
            embed.addField("Server Name",`${server.name + " (" + server.nameAcronym + ")"}`, true);
            embed.addField("Server ID", `${server.id}`, true);
            embed.addField("Verified Server", `${server.verified}`, true);
            embed.addField("Owner", `${server.owner}`, true);
            embed.addField("Region", `${server.region}`, true);
            embed.addField("Server Created", `${server.createdAt}`, true);
            embed.addField("Members", `${server.members.size}`, true);
            embed.addField("Channels", `${server.channels.size}`, true);
            embed.addField("Roles", `${server.roles.size}`, true);
            embed.addField("Custom Emojis", `${server.emojis.size}`, true);
            embed.addField("AFK Timeout", `${afkTime} minutes`, true);
            embed.addField("Large Server (250+ Users)", `${server.large}`, true);

            message.channel.send({embed});
        } else {
            message.author.send("Server isn't available!");
        }
    }
}