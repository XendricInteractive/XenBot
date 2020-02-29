const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('./config.json');
const bot = new commando.Client({
    owner: config.owner,
    commandPrefix: 'xd//'
});

bot.on("ready", () => {
    bot.user.setActivity("xd//help", {type: "Listening", url: "http://xendric.net/xenbot"});
    console.log(`**Bot ready. ${bot.guilds.size} servers, ${bot.channels.size} channels, ${bot.users.size} users.**`);
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
// bot.on("debug", (e) => console.info(e));

bot.registry.registerGroups([
	['useful', 'Useful'],
    ['random', 'Random'],
    ['xendric', 'Xendric']
]).registerDefaults().registerCommandsIn(__dirname + "/commands");

bot.on("messageUpdate", async(oldMsg, newMsg) =>{
			if(oldMsg.content === newMsg.content) return;

			let logEmbed = new discord.RichEmbed();
			logEmbed.setAuthor(oldMsg.author.tag, oldMsg.author.avatarUrl);
			logEmbed.setThumbnail(oldMsg.author.avatarUrl);
			logEmbed.setColor(0x007fed);
			logEmbed.setDescription("Message from a user was updated.");
			logEmbed.addField("Before", oldMsg.content, true);
			logEmbed.addField("After", newMsg.content, true);
			logEmbed.setTimestamp();
			logEmbed.setFooter("Embed for message updates");

			let loggingChannel = newMsg.guild.channels.find(ch => ch.name === "dev-bot-testing");
			if(!loggingChannel) return;

			loggingChannel.send(logEmbed);
		});

bot.login(config.token);