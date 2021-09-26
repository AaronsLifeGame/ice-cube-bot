// ban command
const Command = require("../Structures/Command");
const interaction = require("../Events/interactionCreate.js");

module.exports = new Command({
	name: "kick",
	description: "Kicks the Mentioned User!",
	type: "SLASH",
	slashCommandOptions: [{
		name: "target",
		description: "The User you want to Kick!",
		type: "USER",
		required: true
	},
	{
		name: "reason",
		description: "Reason for Banning!",
		type: "STRING",
		required: false
	}],
	permission: "MANAGE_MEMBERS",
});