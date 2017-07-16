const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: '.'
});

bot.on("ready", () => {
    bot.user.setGame("xendric.net");
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('xendric', 'Xendric');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzM1NjIzODg3MjQ3MTE0MjQw.DEsyiw.GUhGNzPN3BWTKy9bYiOvTbuAICA');