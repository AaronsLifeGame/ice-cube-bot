// ban command
const Command = require("../Structures/Command");

module.exports = new Command({
	name: "kick",
	description: "Kicks the Mentioned User!",
	type: "SLASH",
	slashCommandOptions: [{
		name: "target",
		description: "The Target you want to Kick!",
		type: "USER",
		required: true
	}],
	permission: "MANAGE_MESSAGES",
	async run(message, args, client) {
		const amount = args[1];

		if (!amount || isNaN(amount))
			return message.reply(
				`${
					amount == undefined ? "Nothing" : amount
				} is not a valid number!`
			);

		const amountParsed = parseInt(amount);

		if (amountParsed > 100)
			return message.reply("You cannot clear more than 100 messages!");

		message.channel.bulkDelete(amountParsed);

		const msg = await message.reply(
			`> Cleared ${amountParsed} messages!`
		);

		

		if (msg) setTimeout(() => msg.delete(), 5000);
	}
});