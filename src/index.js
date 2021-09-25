console.clear();
require('dotenv').config();

const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const client = new Client();

const distube = require("distube")
client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true});
client.distube
	.on("playSong", (message, queue, song) => message.channel.send(
		`Playing **${song.name}** - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))

client.start(process.env.TOKEN);