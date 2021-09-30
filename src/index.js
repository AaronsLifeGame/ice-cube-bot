console.clear();
require('dotenv').config();

const { Client, intents } = require("./Structures/Client.js");
const config = require("./Data/config.json");

const { Player } = require('discord-player');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

player = new Player(client, client.config.opt.discordPlayer);

require('./loader');
require('./events');

client.start(process.env.TOKEN);