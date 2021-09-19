const Event = require("../Structures/Event.js");
const Discord = require("discord.js");

const canvacord = require("canvacord");

// Welcome Logs
module.exports = new Event("guildMemberAdd", (client, member) => {

	const channel = member.guild.channels.cache.find(c => c.name == "logs");

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
	.setColor("#57F287")
	.setTitle(`Member Joined!`)
	.setDescription(`
		${member.user} has Joined the Server! \n
		The ${member.guild.members.cache.size}th Member!
		`)
	.setThumbnail(member.user.avatarURL({dynamic: true}))

	channel.send({ embeds: [embed] });
});

/*
// Welcome Card
module.exports = new Event("guildMemberAdd", (message, args, client, member) => {

	const channel = member.guild.channels.cache.find(c => c.name == "welcome");

	if (!channel) return;

	const welcomeCard = new canvacord.Welcomer()

	.setUsername(member.user.username)
	.setDiscriminator(member.user.discriminator)
	.setAvatar(member.user.displayAvatarURL({format: "png"}))
	.setColor("title", "#FFFFFF")
	.setColor("username-box", "#FFFFFF")
	.setColor("discriminator-box", "#FFFFFF")
	.setColor("message-box", "#FFFFFF")
	.setColor("border", "#FFFFFF")
	.setColor("avatar", "#FFFFFF")
	.setBackground("https://media.discordapp.net/attachments/885314193400664064/889000013542359101/banner.png")
	.setMemberCount(member.guild.memberCount)

	let attachment = new Discord.MessageAttachment(await welcomeCard.build(), ("welcome.png")),
	member.guild.channels.cache.get("885293154566275113").send(member.user.toString(), attachment)
});
*/