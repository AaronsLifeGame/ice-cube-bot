// Staff Help
const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "staffHelp",
    description: "Shows a List of Avaliable Commands!",
    type: "SLASH",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#000000")
        .setTitle("Help")
        .setDescription(`
            **/stats** - Shows Statistics of the Bot!
            **/clear [amount < 100]** - Clears up to 100 Messages! 
            **/purge [amount < 1000]** - Purges up to 1000 Messages!
            
            **/warn [user] [reason (optional)]** - Warns the Mentioned User!
            **/mute [user] [reason (optional)]** - Mutes the Mentioned User!
            **/kick [user] [reason (optional)]** - Kicks the Mentioned User!
            **/ban [user] [reason (optional)]** - Bans the Mentioned User!
            
            **/tempMute [user] [time] [reason (optional)]** - Temporarily Mutes the Mentioned User!
            **/tempKick [user] [time] [reason (optional)]** - Temporarily Kicks the Mentioned User!
            **/tempBan [user] [time] [reason (optional)]** - Temporarily Bans the Mentioned User!
            
            **/staffHelp** - Shows this Message!
            `)

        message.reply({ embeds: [embed] })        
    }
})