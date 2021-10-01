const Discord  = require('discord.js')

module.exports = new Command({
    name: "banner",
    description: "Shows the banner of an user",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

let user = message.mentions.users.first() || message.author;

let banner = user.bannerURL({size: 2048, dynamic: true})

const e = new Discord.MessageEmbed().setTitle("Banner command").setImage(user.bannerURL({size: 2048, dynamic: true}))

message.reply({ embeds: [e]})
}
})