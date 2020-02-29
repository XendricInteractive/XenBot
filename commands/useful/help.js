const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'msg',
			group: 'useful',
			memberName: 'msg',
			description: 'Displays available commands.'
		});
	}

	async run(msg, args){
	}
}