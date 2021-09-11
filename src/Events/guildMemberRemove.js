const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {

	const channel = member.guild.channels.cache.find(c => c.name == "ice-cube-bot");

	if (!channel) return;

	const embed = new Discord.MessageEmbed();
	
	embed
	.setColor("#ED4245")
	.setTitle(`${member.user.username} has Left!`)
	.setDescription(`
		We Hope you Enjoyed your Stay! 
		───────────────────────── 
		User Joined ${member.joinedAt.toUTCString()}
		`)
	.setThumbnail(member.user.avatarURL({dynamic: true}))
	
	channel.send({ embeds: [embed] });
});