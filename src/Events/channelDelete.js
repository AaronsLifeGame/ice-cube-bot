const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("channelDelete", async (client, channel) => {

    const logChannel = channel.guild.channels.cache.find(c => c.name === 'logs')

    if (!logChannel) return

    const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#ED4245")
    .setTitle(`Channel Deleted!`)
    .setDescription(`
        ${log.executor} has Deleted *#${channel.name}*!
        `)
    
    logChannel.send({ embeds: [embed] });
});