const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    description: "Shows a List of Avaliable Commands!",
    permission: "SEND_MESSAGES",

    async run(message,cargs,cclient) {
        const msg = await message.reply(`
**This Needs to be Set Up**

**!ping** - Shows the Ping of the Bot!
**!hello** - Hello!
**!embed** - Shows an Embed!
**!invite** - Shows Invite Links!

**!help** - Shows this Message!
            `)
    }
})