const Event = require("../Structures/Event.js");
const fs = require("fs");

module.exports = new Event("messageCreate", (client, message) => {

    // Music Stuff ..
        if (message.author.bot || message.channel.type === 'dm') return;

        const prefix = client.config.app.px;

        if (message.content.indexOf(prefix) !== 0) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

        const DJ = client.config.opt.DJ;

        if (cmd && DJ.enabled && DJ.commands.includes(cmd.name)) {
            const roleDJ = message.guild.roles.cache.find(x => x.name === DJ.roleName);

            if (!message.member._roles.includes(roleDJ.id)) {
                return message.channel.send(`This command is reserved for members with the ${DJ.roleName} role on the server ${message.author}... try again ? ❌`);
            }
        }

        if (cmd && cmd.voiceChannel) {
            if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${message.author}... try again ? ❌`);

            if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel ${message.author}... try again ? ❌`);
        }

        if (cmd) cmd.execute(client, message, args);
    // .. End

    if (message.author.bot) return;

    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} is not a valid command!`);

    if (!["BOTH", "TEXT"].includes(command.type))
        return message.reply(
            "That command is only available via slash command!"
        );

    const permission = message.member.permissions.has(command.permission, true);

    if (!permission)
        return message.reply(
            `You do not have the permission \`${command.permission}\` to run this command!`
        );

    command.run(message, args, client);
});