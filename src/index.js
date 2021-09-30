console.clear();
require('dotenv').config();

const { Client, Intents } = require("./Structures/Client.js");
const config = require("./Data/config.json");

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

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.start(process.env.TOKEN);