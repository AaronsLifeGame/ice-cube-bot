const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {

	const channel = member.guild.channels.cache.find(c => c.name == "logs");

	if (!channel) return;

	const embed = new Discord.MessageEmbed();
	
	embed
	.setColor("#ED4245")
	.setTitle(`Member Left!`)
	.setDescription(`
		${member.user} has Left the Server! \n
		User Joined ${member.joinedAt.toUTCString()}
		`)
	.setThumbnail(member.user.avatarURL({dynamic: true}))
	
	channel.send({ embeds: [embed] });
});