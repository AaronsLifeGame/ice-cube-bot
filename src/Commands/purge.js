const Command = require("../Structures/Command");

module.exports = new Command({
	name: "purge",
	description: "Purges a Channel",
	type: "SLASH",
	slashCommandOptions: [{
		name: "amount",
		description: "The amount of messages to purge",
		type: "INTEGER",
		required: false
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

		if (amountParsed > 1000)
			return message.reply("You cannot clear more than 1000 messages!");

		message.channel.bulkDelete(amountParsed);

		const msg = await message.reply(
			`> Purged ${amountParsed} messages!`
		);

		

		if (msg) setTimeout(() => msg.delete(), 5000);
	}
});