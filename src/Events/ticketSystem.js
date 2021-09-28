const {
    MessageActionRow,
    MessageButton
} = require('discord.js');
const {
    MessageEmbed
} = require('discord.js')
const client = require('../Events/interactionCreate.js')

client.on("interactionCreate", async (interaction) => {

    await interaction.deferUpdate();
    if (interaction.isButton()) {
        if (interaction.customId === 'tic') {

            const thread = await interaction.channel.threads.create({
                name: `${interaction.user.tag}`,
                autoArchiveDuration: 1440, // this is 24hrs 60 will make it 1 hr
                //type: 'private_thread', // for private tickets u need server boosted to lvl 1 or 2 ok u need lvl 2, since mine is not boosted i will remove this LINE ONLY!
            });
            await thread.setLocked(true)
            const embed = new MessageEmbed()
                .setTitle('Ticket')
                .setDescription('Hello there, \n The staff will be here as soon as possible mean while tell us about your issue!\nThank You!')
                .setColor('#57F287')
                .setTimestamp()
                .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                    dynamic: true
                }));

            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('del')
                    .setLabel('🗑️ Delete Ticket!')
                    .setStyle('DANGER'),
                );
            interaction.user.send('Your ticket has been opened!');
            thread.send({
                content: `Welcome <@${interaction.user.id}>`,
                embeds: [embed],
                components: [del]
            }).then(interaction.followUp({
                content: 'Created Ticket!',
                ephemeral: true
            }))
            console.log(`Created thread: ${thread.name}`);
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {

            const thread = interaction.channel
            thread.delete();

        }
    }
})