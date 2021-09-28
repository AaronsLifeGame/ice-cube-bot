module.exports = {
    app: {
        px: '!',
        token: (process.env.TOKEN),
        playing: 'with Ice Cubes!',
    },

    opt: {
        DJ: {
            enabled: false, // whether the DJ mode should be activated or not
            roleName: '', // the name of the DJ role to be used
            commands: [] // the list of commands limited to members with the DJ role
        },
        maxVol: 100,
        discordPlayer: {}
    }
};