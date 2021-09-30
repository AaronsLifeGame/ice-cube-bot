const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

function doTheFuni8ball() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = new Command({
    name: "8ball",
    description: "Ask the 8 Ball Anything!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
            .setColor("#EB459E")
            .setTitle("8ball")
            .setDescription(`Your answer is: ` + doTheFuni8ball())
        message.reply({ embeds: [embed] });
    }
});