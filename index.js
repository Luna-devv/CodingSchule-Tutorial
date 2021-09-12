// Defined my shit.
const { Client, Intents, MessageEmbed, Message } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_MEMBERS]
});
const chalk = require(`chalk`)


//my very complicated config system
const config = require(`./config.json`);
Object.keys(config).forEach(async (key) => {
    client[key] = config[key];
});//this just does when you add *for example* ' "smth": "smth" ' that it defines it in client.


//event - on bot start
client.once(`ready`, () => {
    console.log(chalk.green(`${client.user.username} is online lmao`));
    client.user.setPresence({
        activity: {
            name: `at Lunas tutorials`,
            type: `WATCHING`
        }
    });
});


//event - on message create
client.on(`messageCreate`, async message => {
    // replies when you @mention your bot
    if(message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) return message.channel.send({
        content: `Hey <@!${message.author.id}>, how are you today?`
    });
});


// Login the client and connect with discord.
client.login(client.token);