const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "rainbow",
    description: "Shows a Short Rainbow Embed!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const blackEmbed = new Discord.MessageEmbed()
            .setColor("#000000")
            .setDescription("RAINBOW!")

        const whiteEmbed = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setDescription("RAINBOW!")

        // Edit Part Below
        var Msg = await message.channel.send(blackEmbed); // sends message
        Msg.edit(whiteEmbed) // edits message with newembed
    }
})