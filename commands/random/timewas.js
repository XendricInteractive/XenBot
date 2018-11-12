const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class TimeWasCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'timewas',
            group: 'random',
            memberName: 'timewas',
            description: 'What time was it *xx* hours/minutes/days/months/years (h, m, d, M, y) ago?',
            examples: ['timewas 1h 2m --> *1 hour, 2 minutes*', 'timewas 4d 2M --> *4 days, 2 months*', 'timewas 1d 5h --> *1 day, 5 hours*', 'timewas 5y 3d --> *5 years, 3 days*', 'timewas 1h 1m 1d 1M 1y --> 1 hour, 1 minute, 1 day, 1 month, 1 year'],
            args: [
                {
                    key: 'time',
                    prompt: 'What time was it xx hours, xx minutes, xx days, xx months and xx years ago?',
                    type: 'string'
                }
            ]
        });
    }

    /*
    Whole lot of Stuff. All this makes it so command can do "1h 6d 4y" or "5M 1m 7h" or any combination.
    Args are an array, each item is a string. This goes through each array item, and finds a specific (case-sensitive) char. Such as "h" or "d", etc. Then if slices off the character leaving the number behind. That number is then used to calculate the new date.

    Slice here slices off stuff from strings, and here i have it start at 0 and the end is the string's length - 1 to only cut off the character. This is so you can have more than one number for the value. Such as 34d or 150d would return only the number.
    */
    async run(message, args){
        // Converts the arg type of string into an array. Couldn't get the args type value to be an array from the start..
        if(message.channel instanceof discord.DMChannel)
            args = message.content.slice('timewas'.length).trim().split(/ +/g);
        else
            args = message.content.slice(`${this.client.commandPrefix}`.length + 'timewas'.length).trim().split(/ +/g);

        // Go through array, and each item to find specific char
        const strHours = args.filter(s => s.includes('h')).toString();
        const strMins = args.filter(s => s.includes('m')).toString();
        const strDays = args.filter(s => s.includes('d')).toString();
        const strMonths = args.filter(s => s.includes('M')).toString();
        const strYears =args.filter(s => s.includes('y')).toString();

        // Cut off the char to leave only number left
        if(strHours.includes('h')) var tempHours = strHours.slice(0, strHours.length-1); else var tempHours = 0;
        if(strMins.includes('m')) var tempMins = strMins.slice(0, strMins.length-1); else var tempMins = 0;
        if(strDays.includes('d')) var tempDays = strDays.slice(0, strDays.length-1); else var tempDays = 0;
        if(strMonths.includes('M')) var tempMonths = strMonths.slice(0, strMonths.length-1); else var tempMonths = 0;
        if(strYears.includes('y')) var tempYears = strYears.slice(0, strYears.length-1); else var tempYears = 0;

        // Calculate new date
        const newDate = new Date();
        newDate.setHours(Number(tempHours) > newDate.getHours() ? Number(tempHours) - newDate.getHours() : newDate.getHours() - Number(tempHours));
        newDate.setMinutes(Number(tempMins) > newDate.getMinutes() ? Number(tempMins) - newDate.getMinutes() : newDate.getMinutes() - Number(tempMins));
        newDate.setDate(Number(tempDays) > newDate.getDate() ? Number(tempDays) - newDate.getDate() : newDate.getDate() - Number(tempDays));
        newDate.setMonth(Number(tempMonths) > newDate.getMonth() ? Number(tempMonths) - newDate.getMonth() : newDate.getMonth() - Number(tempMonths));
        newDate.setFullYear(Number(tempYears) > newDate.getFullYear() ? Number(tempYears) - newDate.getFullYear() : newDate.getFullYear() - Number(tempYears));

        const stringTitle = () =>{
            var s = [];

            if(Number(tempHours) > 0){
                if(Number(tempHours) === 1)
                    s.push(`${tempHours} hour`);
                else
                    s.push(`${tempHours} hours`);
            }

            if(Number(tempMins) > 0){
                if(Number(tempMins) === 1)
                    s.push(`${tempMins} minute`);
                else
                    s.push(`${tempMins} minutes`);
            }

            if(Number(tempDays) > 0){
                if(Number(tempDays) === 1)
                    s.push(`${tempDays} day`);
                else
                    s.push(`${tempDays} days`);
            }

            if(Number(tempMonths) > 0){
                if(Number(tempMonths) === 1)
                    s.push(`${tempMonths} month`);
                else
                    s.push(`${tempMonths} months`);
            }

            if(Number(tempYears) > 0){
                if(Number(tempYears) === 1)
                    s.push(`${tempYears} year`);
                else
                    s.push(`${tempYears} years`);
            }

            return s.join(', ');
        }

        const calculateFullMinutes = () => {
            return (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes();
        }

        const embed = new discord.RichEmbed();
        embed.setColor(message.guild.me.colorRole.hexColor);
        embed.setTitle('__What time was it ' + stringTitle() + ' ago?__');
        embed.addField("24hr Time", newDate.getHours() + ":" + calculateFullMinutes(), true);
        embed.addField("Date", (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear(), true);
        
        message.channel.send({embed});
    }
}