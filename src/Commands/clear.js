const Command = require("../Structures/Command");

module.exports = new Command({
	name: "clear",
	description: "Clears an amount of messages",
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

		if (amountParsed > 100) return message.reply("You can not clear more than 100 Messages!");

		message.channel.bulkDelete(amountParsed);
		
		const msg = await message.channel.send(
			`Cleared ${amountParsed} messages!`
			);
		
		setTimeout(() => msg.delete(), 5000);
	}
});