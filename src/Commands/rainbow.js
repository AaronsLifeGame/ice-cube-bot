const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "rainbow",
    description: "Shows a Short Rainbow Embed!",
    permission: "SEND_MESSAGES",

    // const sentEmbed = await message.channel.send({ embeds: [embed] })
    // sentEmbed.edit({ embeds: [embed] })

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
            .setColor("#000000")
            .setDescription("RAINBOW!")

        message.send({embeds: [embed]});

        embed
            .setColor("#ED4245")
            .setDescription("RAINBOW!")

        message.edit({embeds: [embed]});  

        embed
            .setColor("#FEE75C")
            .setDescription("RAINBOW!")

        message.edit({embeds: [embed]});

        embed
            .setColor("#57F287")
            .setDescription("RAINBOW!")
        
        message.edit({embeds: [embed]});

        embed
            .setColor("#5865F2")
            .setDescription("RAINBOW!")

        message.edit({embeds: [embed]}); 

        embed
            .setColor("#EB459E")
            .setDescription("RAINBOW!")

        message.edit({embeds: [embed]});

        embed
            .setColor("#FFFFFF")
            .setDescription("RAINBOW!")

        message.edit({embeds: [embed]});       
    }
})