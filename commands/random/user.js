const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class AboutUserCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'user',
            aliases: ['aboutuser', 'userinfo', 'user-info', 'infouser', 'userprofile'],
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

        const embed = new discord.RichEmbed();
        embed.setTitle("__" + user.username + " Info__");
        embed.setThumbnail(user.avatarURL);
        embed.setColor(0x007fed);
        embed.addField("Username", `${user.username}#${user.discriminator}`, true);
        embed.addField("User ID", `${user.id}`, true);
        embed.addField("User Created", `${user.createdAt}`, true);
        embed.addField("Status", `${user.presence.status}`, true);
        embed.addField("Game", `${user.presence.game ? user.presence.game.name : "Not in a game."}`, true);
        embed.addField("Nickname", `${member.nickname ? member.nickname : "N/A"}`, true);
        embed.addField("User Bot?", `${user.bot}`, true);
        embed.setFooter(message.author.username + " looked up a user's info!", message.author.avatarURL);

        message.channel.send({embed});
    }
}