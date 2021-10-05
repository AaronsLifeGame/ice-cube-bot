const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "d",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

            embed
            .setColor("#000000")
            .setDescription(`https://disboard.org/server/bump/885291653668167681`)

        message.send({ embeds: [embed] }) 
    } 
})