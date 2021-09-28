const Discord = require('discord.js')
const Command = require('../Structures/Command.js')

module.exports = new Command({
    name: "help",
    description: "Help command",
    type: "SLASH",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Here's a list of all my commands - yes`)
    .setColor(`#ffffff`)

    client.commands.forEach(cmd => {
        embed.addField(`${cmd.name}`, `${cmd.description}`, true) // Change true to false if you want it vertical
    })

    message.reply({embeds: [embed]})
}})