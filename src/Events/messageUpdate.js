const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("messageUpdate", async (client, message, newMessage, member) => {

    const logChannel = message.guild.channels.cache.find(c => c.name === 'logs')

    if (!logChannel) return

    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_UPDATE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#FEE75C")
    .setTitle(`Message Updated!`)
    .setDescription(`
        ${log.executor) has Edited *${message}*!
        Message Updated to *${newMessage}*!
        `)
    
    logChannel.send({ embeds: [embed] });
});