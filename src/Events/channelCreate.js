const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("channelCreate", async (client, channel) => {

    const logChannel = channel.guild.channels.cache.find(c => c.name === 'logs')

    if (!logChannel) return

    const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#5865F2")
    .setTitle(`Channel Created!`)
    .setDescription(`
        ${log.executor} has Created ${channel}!
        `)
    
    logChannel.send({ embeds: [embed] });
});