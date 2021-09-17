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

            message.send({embeds: [embed]});

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#ED4245")
            .setDescription("RAINBOW!")

            sentEmbed.edit({ embeds: [embed] })

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#FEE75C")
            .setDescription("RAINBOW!")

        sentEmbed.edit({ embeds: [embed] })

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#57F287")
            .setDescription("RAINBOW!")

        sentEmbed.edit({ embeds: [embed] })

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#5865F2")
            .setDescription("RAINBOW!")

        sentEmbed.edit({ embeds: [embed] })

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#EB459E")
            .setDescription("RAINBOW!")

        sentEmbed.edit({ embeds: [embed] })

        const sentEmbed = await message.channel.send({ embeds: [embed] })
            embed
            .setColor("#FFFFFF")
            .setDescription("RAINBOW!")

        sentEmbed.edit({ embeds: [embed] })
    }
})