const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TimeInCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'timein',
            group: 'random',
            memberName: 'timein',
            description: 'What will the time be in *xx* hours/days/months/etc from now?',
            examples: ['timein 1 2 - *1 hour, 2 minutes*', 'timein 0 0 0 4 - *4 days (0 hours, minutes and months)*', 'timein 5 0 0 1 - *5 hours and 1 day (0 minutes and months)*'],
            args: [
                {
                    key: 'hours',
                    prompt: 'How many hours?',
                    type: 'integer',
                    default: ''
                },
                {
                    key: 'mins',
                    prompt: 'How many minutes?',
                    type: 'integer',
                    default: ''
                },
                {
                    key: 'months',
                    prompt: 'How many months?',
                    type: 'integer',
                    default: ''
                },
                {
                    key: 'days',
                    prompt: 'How many days?',
                    type: 'integer',
                    default: ''
                }
            ]
        });
    }

    async run(message, args){
        var hours = args.hours;
        var mins = args.mins;
        var months = args.months;
        var days = args.days;

        const date = new Date();
        date.setHours(date.getHours() + hours);
        date.setMinutes(date.getMinutes() + mins);
        date.setMonth(date.getMonth() + 1 + months);
        date.setDate(date.getDate() + days);

        const embed = new discord.RichEmbed();
        embed.setColor(0x007fed);
        embed.setTitle("__What will it be in " + hours + " hours, " + mins + " minutes, " + months + " months and " + days + " days?__");
        embed.addField("Your 24hr Time", date.getHours() + ":" + date.getMinutes(), true);
        embed.addField("Date", date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(), true);
        
        message.channel.send({embed});
    }
}