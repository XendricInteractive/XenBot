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

    async run(msg, args){
        msg.say("http://xendric.net/forum/");
    }
}