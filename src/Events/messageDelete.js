const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("messageDelete", async (client, message, member) => {

    const logMessage = message.guild.channels.cache.find(c => c.name === 'logs')

    if (!logMessage) return

    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#5865F2")
    .setTitle(`Message Deleted!`)
    .setDescription(`
        ${log.executor} has Deleted *${message}*!
        `)
    
    logMessage.send({ embeds: [embed] });
});