const Event = require("../Structures/Event.js");
const client = require("../Structures/Client.js")

module.exports = new Event("ready", client =>{
	console.log("Bot is ready!");

	client.user.setStatus('online');
	client.user.setActivity('with Ice Cubes!');
});