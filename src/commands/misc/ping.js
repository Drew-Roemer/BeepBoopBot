module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // deleted: boolean,
    callback: (client, interaction) => {
        interaction.reply(`Pong ! ${client.ws.ping}ms`)
    },
};