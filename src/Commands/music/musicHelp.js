const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "musicHelp",
    aliases: ['musichelp'],
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
            **!resume** - Resumes Current Song!
            **!stop** - Stops Current Song!

            **!seek [time]** - Seeks Forward through the Current Song!
            **!skip** - Skips Current Song!
            **!back** - Goes Back to Previous Song!
            **!loop [toggleable]** - Loops the Current Song!
            **!save** - Saves the Current Queue for Later!
            **!clear** - Clears Queue!

            **!nowPlaying** - Shows what Song is Now Playing!
            **!progress** - Shows the Progress through Current Song!
            **!queue** - Shows The List of Songs in the Queue!
            **!shuffle** - Shuffles Queue!

            **!volume [0 - 100%]** - Changes Percentage of Volume.
            **!filter [filter name]** - (I Dont Know?)

            **!musicHelp** - Shows this Message!
            `)

        message.reply({ embeds: [embed] })        
    }
})