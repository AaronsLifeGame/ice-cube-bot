const Discord = require("discord.js");
const Command = require("./Command.js");
const Event = require("./Event.js")
const config = require("../Data/config.json");

const intents = new Discord.Intents(32767);
const fs = require("fs");

class Client extends Discord.Client {
	constructor() {
		super({ intents });
		
		/**
		 * @type {Discord.Collection<string, Command>}
		 */

		 this.commands = new Discord.Collection();
		 
		 this.prefix = config.prefix;
		}

		start(token) {

		// Command Handler
		let slashcommands = []
			 const directory = fs.readdirSync('./src/Commands')
			   directory.forEach(dir => {
			      const commandFiles = fs.readdirSync(`./src/Commands/${dir}`)
			      .filter(file => file.endsWith('.js'))
			      /**
			      * @type {Command[]}
			      */
			      const commands = commandFiles.map(file => require(`../Commands/${dir}/${file}`));
			            
			      commands.forEach(cmd => {
			      console.log(`Command ${cmd.name} loaded!`)
			      this.commands.set(cmd.name, cmd)
			      slashcommands.push(cmd)     
				});
			 })

		const slashCommands = slashcommands
			.filter(cmd => ["BOTH", "SLASH"].includes(cmd.type))
			.map(cmd => ({
				name: cmd.name.toLowerCase(),
				description: cmd.description,
				permissions: [],
				options: cmd.slashCommandOptions,
				defaultPermission: true
			}));

		this.removeAllListeners();
		this.on("ready", async () => {
			const cmds = await this.application.commands.set(slashCommands);
		
			cmds.forEach(cmd => console.log(`Interaction ${cmd.name} loaded!`));
		})

		// Event Handler
		fs.readdirSync("./src/Events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(`Event ${event.event} loaded!`);
				this.on(event.event, event.run.bind(null, this));
			});

			this.login(process.env.TOKEN);		
		}
	}

	module.exports = Client;