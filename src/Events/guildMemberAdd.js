const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {

	const channel = member.guild.channels.cache.find(c => c.name == "ice-cube-bot");

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
	.setColor("#57F287")
	.setTitle(`${member.user.username} has Joined!`)
	.setDescription(`
		Welcome to the Chill Zone 2.0!
		─────────────────── 
		Your the ${member.guild.members.cache.size}th Member!
		`)
	.setThumbnail(member.user.avatarURL({dynamic: true}))

	channel.send({ embeds: [embed] });
});