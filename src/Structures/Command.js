const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * @param {Discord.Message | Discord.CommandInteraction} message
 * @param {string[]} args
 * @param {Client} client
 */
 function RunFunction(message, args, client) {}

 class Command {
	/**
	 * @typedef {"BOTH" | "SLASH" | "TEXT"} CommandType
	 * @typedef {{name: string, description: string, permission: Discord.PermissionString, 
	 * 		run: RunFuntion}} CommandOptions
	 * @param {CommandOptions} options
	 */
	 constructor(options) {
	 	this.name = options.name;
	 	this.description = options.description;
	 	this.permission = options.permission;
	 	this.run = options.run
	 }
	}

	module.exports = Command;