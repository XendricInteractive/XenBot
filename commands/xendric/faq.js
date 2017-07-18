const commando = require('discord.js-commando');

module.exports = class FAQCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'faq',
            group: 'xendric',
            memberName: 'faq',
            description: 'Gives FAQ link.'
        });
    }

    async run(message, args){
        message.channel.send("http://xendric.net/faq/xenbot");
    }
}