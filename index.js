const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '97571276813508608',
    commandPrefix: 'x//'
});
const music = require('discord.js-music');
//music(bot);

bot.on("ready", () => {
    bot.user.setGame("x//help");
    console.log(`**Bot ready. ${bot.guilds.size} servers, ${bot.channels.size} channels, ${bot.users.size} users.**`);
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));

bot.registry.registerGroups([
    ['random', 'Random'],
    ['xendric', 'Xendric'],
    ['music', "Music"]
]).registerDefaults().registerCommandsIn(__dirname + "/commands");

bot.login('MzM1NjIzODg3MjQ3MTE0MjQw.DEsyiw.GUhGNzPN3BWTKy9bYiOvTbuAICA');