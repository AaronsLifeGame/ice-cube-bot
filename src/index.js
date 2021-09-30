console.clear();
require('dotenv').config();

const { Client, Intents } = require("./Structures/Client.js");
const config = require("./Data/config.json");

const { Player } = require('discord-player');

const client = new Client();

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./loader');
require('./events');

client.start(process.env.TOKEN);