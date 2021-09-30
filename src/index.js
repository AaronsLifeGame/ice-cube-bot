console.clear();
require('dotenv').config();

const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const client = new Client();

// Discord Player..
	const { Player } = require('discord-player');

	player = new Player(client, client.config.opt.discordPlayer);

	require('./loader');
	require('./events');
// ..End

client.start(process.env.TOKEN);