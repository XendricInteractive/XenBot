const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '97571276813508608',
    commandPrefix: 'x//'
});
const music = require('discord.js-music');
music(bot);

bot.on("ready", () => {
    bot.user.setGame("x//help");
});

bot.registry.registerGroups([
    ['random', 'Random'],
    ['xendric', 'Xendric'],
    ['music', "Music"]
]).registerDefaults().registerCommandsIn(__dirname + "/commands");

bot.login('MzM1NjIzODg3MjQ3MTE0MjQw.DEsyiw.GUhGNzPN3BWTKy9bYiOvTbuAICA');