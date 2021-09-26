const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const music = args.join(" ");

	client.distube.play(message, music)
}

module.exports.config = {
	name: "play",
	aliases: ['p'],
	description: "Plays searched Song in Current VC!"
}