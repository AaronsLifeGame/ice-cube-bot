const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

const canvacord = require("canvacord")

module.exports = new Event("guildMemberAdd", async member => {
	if(member.guild.id !== "885291653668167681")
	const welcomeCard = new canvacord.Welcomer();

	.setUsername(member.user.username)
	.setDiscriminator(member.user.discriminator)
	.setAvatar(member.user.displayAvatarURL({format: "png"}))
	.setColor("title", "#FFFFFF")
	.setColor("username-box", "#FFFFFF")
	.setColor("discriminator-box", "#FFFFFF")
	.setColor("message-box", "#FFFFFF")
	.setColor("border", "#FFFFFF")
	.setColor("avatar", "#FFFFFF")
	.setBackground("https://drive.google.com/file/d/1v85s_RUxjNpC5cDaWAkj3cXL7zRBWQ5w/view?usp=sharing")
	.setMemberCount(member.guild.memberCount)

	let attachment = new Discord.MessageAttachment(await welcomeCard.build(, "welcome.png")
	member.guild.channels.cache.get("885293154566275113").send(member.user.toString(), attachment)
});