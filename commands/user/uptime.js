const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

const logToConsole = require('../../actions/logToConsole')

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            group: 'user',
            memberName: 'uptime',
            description: 'Sends the uptime of the bot',
            examples: ['uptime'],
            guildOnly: true
        });
    }

    run(message) {
        message.delete();
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
        const pingEmbed = new MessageEmbed()
            .setColor('#ff3505')
            .setTitle('Bot Uptime')
            .setDescription(`I have been online for ${days}d ${hours}h ${minutes}m ${seconds}s`,);
        message.channel.send(pingEmbed);
    }
};