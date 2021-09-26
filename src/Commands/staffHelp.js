// Staff Help
const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "staffHelp",
    description: "Shows a List of Avaliable Commands!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#000000")
        .setTitle("Help")
        .setDescription(`
            **!clear [amount < 100]** - Clears up to 100 Messages! 
            **!purge [amount < 1000]** - Purges up to 1000 Messages!
            
            **!warn [user]** - Warns the Mentioned User!
            **!mute [user]** - Mutes the Mentioned User!
            **!kick [user]** - Kicks the Mentioned User!
            **!ban [user]** - Bans the Mentioned User!
            
            **!tempMute [user] [time]** - Temporarily Mutes the Mentioned User!
            **!tempKick [user] [time]** - Temporarily Kicks the Mentioned User!
            **!tempBan [user] [time]** - Temporarily Bans the Mentioned User!
            
            **!staffHelp** - Shows this Message!
            `)

        message.reply({ embeds: [embed] })        
    }
})