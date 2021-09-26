// ban command
const Command = require("../Structures/Command");
const interaction = require("../Events/interactionCreate.js");

module.exports = new Command({
	name: "ban",
	description: "Bans the Mentioned User!",
	type: "SLASH",
	slashCommandOptions: [{
		name: "user",
		description: "The User you want to Ban!",
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

	async run(message, args, client) {
		const user = interaction.slashCommandOptions.getUser("user")
		let Reason = interaction.slashCommandOptions.getString("reason")
		const member = interaction.guild.members.cacheget(user.id)
		
		if(!member) return interaction.reply("> The User doesn't exist in this Server!")
		if(!Reason) Reason = "No Reason Provided!"

		try {
			await interaction.guild.members.ban(member, { reason: Reason})
		} catch(e) {
			return interaction.reply("> Cannot Ban the Member!")
		}
		interaction.reply(`> Successfully banned ${user.tag}\nReason: ${Reason}`)
	}
});