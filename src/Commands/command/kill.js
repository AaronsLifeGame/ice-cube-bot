const Command = require("../../Structures/Command.js");

module.exports = new Command({
	name: "kill",
	description: "Kills the Mentioned User!",
	permission: "SEND_MESSAGES",

	async run(message, args, client) {
		if(message.content.startsWith(`!kill`)) {
			let victim = message.mentions.users.first()
			if(!victim) message.reply("Mention someone to Kill")
			else {
				message.channel.send(`> ${victim} Died lol`)
			}
		}
	}
});