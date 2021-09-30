const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "nameme",
	description: "Gives user a New Skill Based Name!",
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {
		let nicknames = ["Newbie", "Novice", "Amateur", "Skilled", "Veteran", "Advanced", "Pro", "Elite", "Master", "God"]
		message.reply(`> ${nicknames[Math.floor(Math.random() * nicknames.length)]} is your New Name!`);
	}
});