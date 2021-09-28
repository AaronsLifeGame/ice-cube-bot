console.clear();
require('dotenv').config();

const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");

// Discord Player..
	const { Player } = require('discord-player');
	
	global.client = new Client({
	    intents: [
	        Intents.FLAGS.GUILDS,
	        Intents.FLAGS.GUILD_MEMBERS,
	        Intents.FLAGS.GUILD_MESSAGES,
	        Intents.FLAGS.GUILD_VOICE_STATES
	    ],
	    disableMentions: 'everyone',
	});

	global.player = new Player(client, client.config.opt.discordPlayer);

	require('./loader');
	require('./events');
// ..End

client.start(process.env.TOKEN);