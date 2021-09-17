const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "rainbow",
    description: "Shows a Short Rainbow Embed!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        embed
        .setColor("#000000")
        .setDescription("RAINBOW!")

        message.channel.send({ embeds: [embed] })

        setTimeout(() => message.delete(), 1000);
        
        embed
        .setColor("#FFFFFF")
        .setDescription("RAINBOW!")

        message.channel.send({ embeds: [embed] });

        setTimeout(() => message.delete(), 1000);
    }
})