const Event = require("../Structures/Event.js")
const Discord = require("discord.js");

module.exports = new Event("roleCreate", async (client, role) => {

    const logRole = role.guild.channels.cache.find(c => c.name === 'logs')

    if (!logRole) return

    const fetchedLogs = await role.guild.fetchAuditLogs({
        limit: 1,
        type: 'ROLE_CREATE',
    });

    const log = fetchedLogs.entries.first();

    const embed = new Discord.MessageEmbed()
    .setColor("#5865F2")
    .setTitle(`Role Created!`)
    .setDescription(`
        ${log.executor} has Created ${role}!
        `)
    
    logRole.send({ embeds: [embed] });
});