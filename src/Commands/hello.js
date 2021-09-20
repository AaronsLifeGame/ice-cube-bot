const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "hello",
	description: "Hello!",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {
		message.reply("Hello!");
	}
});