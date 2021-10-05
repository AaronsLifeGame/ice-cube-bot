const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "d",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

            embed
            .setColor("#000000")
            .setTitle("Help")
            .setDescription(`
                `)

        message.reply({ embeds: [embed] })  
})