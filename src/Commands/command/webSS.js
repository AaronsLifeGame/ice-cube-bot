const fetch = require("node-fetch");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: "webss",
    description: "Get a screenshot of a website",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
      const urls = args[1];
      if (!urls)
        return message.reply(`Give a valid link.`)
      if (urls.length < 8)
        return message.reply("https is too short to reach - 8 limit")

      const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
      try {
        const m = await message.reply("Fetching Screenshot... <a:neo_loading:877035130076659762> ");
          const { body } = await fetch(
              `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
            );
      
            m.edit(
              { content: "Here's a screenshot from the given URL <:neox_mochathumb:881473699461595166>",
                files: [{ attachment: body, name: "Screenshot.png" }]
              }
            );
      } catch (err) {
        if (err.status === 404)
        return message.reply("Could not find any results. Invalid URL?")
      } 
      
    }
})