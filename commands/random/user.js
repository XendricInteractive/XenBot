const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class AboutUserCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'user',
            group: 'random',
            memberName: 'user',
            guildOnly: true,
            description: 'Info about a user\'s discord profile!',
            examples: ['user', 'user username/nickname'],
            args: [
                {
                    key: "member",
                    prompt: "What user's info do you want to see?\n",
                    type: "member",
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
        const user = args.member.user || message.author;
        const member = args.member || message.member;
        const presence = user.presence;

        const embed = new discord.RichEmbed();
        embed.setTitle("__" + user.username + " Info__");
        embed.setThumbnail(user.avatarURL);
        embed.setColor(message.guild.me.colorRole.hexColor);
        embed.addField("Username", `${user.username}#${user.discriminator}`, true);
        embed.addField("User ID", `${user.id}`, true);
        embed.addField("User Created", `${user.createdAt}`, true);
        embed.addField("Status", `${presence.status}`, true);
        embed.addField("Nickname", `${member.nickname ? member.nickname : "N/A"}`, true);
        embed.addField("User Bot?", `${user.bot}`, true);

        embed.addField("Game", `${presence.game ? presence.game.name : "Not in a game."}`, true);
        if(presence.game !== null)
            embed.addField("Livestream", `${presence.game.streaming ? "Yes\n" + presence.game.url : "Not Streaming"}`, true);
        else
            embed.addField("Livestream", "Not Streaming", true);

        embed.setFooter(`${message.author.username} looked up ${message.author.username === user.username ? "their" : user.username + "'s"} info!`, message.author.avatarURL);

        message.channel.send({embed});
    }
}