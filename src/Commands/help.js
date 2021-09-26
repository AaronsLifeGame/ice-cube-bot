const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "help",
    description: "Shows a List of Avaliable Commands!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#000000")
        .setTitle("Help")
        .setDescription(`
            **!8ball [question]** - Ask the 8 Ball Anything! 
            **!ping** - Shows the Ping of the Bot!
            **!hello** - Hello!
            **!embed** - Shows an Embed!
            **!invite** - Shows Invite Links!
            **!kill [user]** - Kills the Mentioned User!
            **!nameme** - Gives user a New Skill Based Name!
            
            **!musicHelp** - Shows a List of Music Commands!

            **!help** - Shows this Message!
            `)

        message.reply({ embeds: [embed] })        
    }
})