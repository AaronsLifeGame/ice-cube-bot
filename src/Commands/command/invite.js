const Command = require("../../Structures/Command.js");

module.exports = new Command({
	name: "invite",
	description: "Shows Invite Links!",
	permission: "SEND_MESSAGES",

	async run(message, args, client) {
		const msg = await message.reply(`
			Invite: https://dsc.gg/chillzone2.0/
Bot: **Not Avaliable for Download Yet!**
		`)
	}
});