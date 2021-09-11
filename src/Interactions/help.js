const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    description: "Shows a List of Avaliable Commands!",
    // type and slashCommandOptions, These are for Interactions
    type: "BOTH",
    slashCommandOptions: [{
        name: "amount",
        description: "The amount of messages to clear",
        type: "INTEGER",
        required: true
    }],
    permission: "SEND_MESSAGES",

    async run(message,cargs,cclient) {
        const msg = await message.reply(`
            **This Needs to be Set Up**
            `)
    }
})


// Original
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    description: "Shows a List of Avaliable Commands!",
    permission: "SEND_MESSAGES",

    async run(message,cargs,cclient) {
        const msg = await message.reply(`
            **This Needs to be Set Up**
            `)
    }
})