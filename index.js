const commando = require('discord.js-commando');
const config = require('./config.json');
const bot = new commando.Client({
    owner: config.owner,
    commandPrefix: 'xd//'
});
const music = require('discord.js-music');
//music(bot);

bot.on("ready", () => {
    bot.user.setGame("xd//help");
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

bot.login(config.token);