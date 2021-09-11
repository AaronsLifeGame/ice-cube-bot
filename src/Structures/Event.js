const Discord = require("discord.js");
const Client = require("./Client.js")

/**
 * @template {keyof Discord.ClientEvents} K
 * @param {Client} client
 * @param {Discord.ClientEvents[K]} eventArgs
 */
 function RunFuction(client, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} K
 */
 class Event {
	/**
	 * @param {K} event
	 * @param {RunnFunction<K>} runFunction
	 */
	 constructor(event, runFunction) {
	 	this.event = event;
	 	this.run = runFunction;
	 }
	};

	module.exports = Event;