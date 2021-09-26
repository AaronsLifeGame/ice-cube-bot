// ban command
const Command = require("../Structures/Command");

module.exports = new Command({
	name: "ban",
	description: "Bans the Mentioned User!",
	type: "SLASH",
	slashCommandOptions: [{
		name: "user",
		description: "The User you want to Ban!",
		type: "USER",
		required: true
	}],
	permission: "MANAGE_MESSAGES",
});