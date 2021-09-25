module.exports.run = async (bot, message, args) => {
	const music = args.join(" ");

	client.distube.play(message, music)
}

module.exports.config = {
	name: "play",
	description: "Plays searched Song in Current VC!"
}