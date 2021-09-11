const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

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