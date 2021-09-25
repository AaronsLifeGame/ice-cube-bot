const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "musicHelp",
    description: "Shows a List of Music Commands!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#000000")
        .setTitle("Music Help")
        .setDescription(`
            **!play [searched song]** - Plays searched Song in Current VC! 
            **!pause** - Pauses Current Song!
            **!stop** - Stops Current Song!
            **!queue** - Shows The List of Songs in the Queue!

            **!musicHelp** - Shows this Message!
            `)

        message.reply({ embeds: [embed] })        
    }
})