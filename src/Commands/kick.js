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
	},
	{
		name: "reason",
		description: "Reason for Banning!"
		type: "STRING"
		required: false
	}],
	permission: "MANAGE_MESSAGES",
});