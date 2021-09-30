console.clear();
require('dotenv').config();

const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const client = new Client();

// Discord Player..
	const player = require('discord-player');

	player = new Player();

	require('./loader');
	require('./events');
// ..End

client.start(process.env.TOKEN);