const commando = require('discord.js-commando');

module.exports = class ForumCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'forum',
            group: 'xendric',
            memberName: 'forum',
            description: 'Xendric Forums'
        });
    }

    async run(message, args){
        message.channel.send("http://xendric.net/forum/");
    }
}