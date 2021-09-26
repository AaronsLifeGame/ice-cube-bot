// ban command
const Command = require("../Structures/Command");

module.exports = new Command({
	name: "kick",
	description: "Kicks the Mentioned User!",
	type: "SLASH",
	slashCommandOptions: [{
		name: "user",
		description: "The User you want to Kick!",
		type: "USER",
		required: true
	}],
	permission: "MANAGE_MESSAGES",
});