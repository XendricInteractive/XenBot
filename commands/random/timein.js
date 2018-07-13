const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TimeInCommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'timein',
            group: 'random',
            memberName: 'timein',
            description: 'What will the time be in *xx* hours/days/months/etc from now?',
            examples: ['timein 1h 2m - *1 hour and 2 minutes*', 'timein 4d 2mo - *4 days, 2 months*', 'timein 1d 5h - *1 day, 5 hours*', 'timein 5y 3d - *5 years, 3 days*'],
            args: [
                {
                    key: 'hours',
                    prompt: 'How many hours?',
                    type: 'string',
                    default: ''
                },
                {
                    key: 'mins',
                    prompt: 'How many minutes?',
                    type: 'string',
                    default: ''
                },
                {
                    key: 'days',
                    prompt: 'How many days?',
                    type: 'string',
                    default: ''
                },
                {
                    key: 'months',
                    prompt: 'How many months?',
                    type: 'string',
                    default: ''
                },
                {
                    key: 'years',
                    prompt: 'How many years?',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    async run(message, args){
        args = message.content.slice(`${this.client.commandPrefix}`.length + "timein".length).trim().split(/ +/g);

        let tempHours = args.indexOf("h");
        message.content.tempHours.slice(this.length - 1);
        var hours = tempHours;
        
        let tempMins = args.indexOf("m");
        message.content.tempMins.slice(this.length - 1);
        var mins = tempMins;

        let tempDays = args.indexOf("d");
        message.content.tempDays.slice(this.length - 1);
        var days = tempDays;

        let tempMonths = args.indexOf("M");
        message.content.tempMonths.slice(this.length - 1);
        var months = tempMonths;

        let tempYears = args.indexOf("y");
        message.content.tempYears.slice(this.length - 1);
        var years = tempYears;

        const date = new Date();
        date.setHours(date.getHours() + hours);
        date.setMinutes(date.getMinutes() + mins);
        date.setMonth(date.getMonth() + 1 + months);
        date.setDate(date.getDate() + days);
        date.setFullYear(date.getFullYear() + years);

        const embed = new discord.RichEmbed();
        embed.setColor(0x007fed);
        embed.setTitle(`__What will it be in ${hours} hours, ${mins} minutes, ${days} days, ${months} months and ${years} years from now?__`);
        embed.addField("24hr Time", date.getHours() + ":" + date.getMinutes(), true);
        embed.addField("Date", date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(), true);
        
        message.channel.send({embed});
    }
}