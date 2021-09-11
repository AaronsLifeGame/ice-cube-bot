const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("channelUpdate", async (client, channel) => {

    const logChannel = channel.guild.channels.cache.find(c => c.name === 'logs')

    if (!logChannel) return

    const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_UPDATE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#5865F2")
    .setTitle(`Channel Update!`)
    .setDescription(`
        ${log.executor} has Edited *${channel.name}*!
        Channel Updated to ${channel}!
        `)
    
    logChannel.send({ embeds: [embed] });
});