const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "embed",
	description: "Shows an Embed!",
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();
		
		embed
		.setColor("#5865F2")
		.setTitle("Some title")
		.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}), 
			"https://dsc.gg/chillzone2.0/")
		.setDescription("Some description here, \n[Invite Link](https://dsc.gg/chillzone2.0/)")
		.setThumbnail("https://i.imgur.com/AfFp7pu.png")
		.setImage("https://i.imgur.com/AfFp7pu.png")

		message.reply({ embeds: [embed] });
	}
})