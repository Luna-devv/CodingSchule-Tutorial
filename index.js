//defined dependencies and other things
//    remember that this should always be in the first lines of your code
const { Client, Intents, MessageEmbed, Message } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_MEMBERS]
}); //the discord client aka bot itself
const chalk = require(`chalk`); //to bake the console a bit colorfull



//config system | if you add a value in "./config.json" you can use it in the client
//    here is an example:
//    If you add "token": "xxx" you can simply use client.token to get your token
const config = require(`./config.json`);
Object.keys(config).forEach(async (key) => {
    client[key] = config[key];
});



//event - on bot start
//      everything that is in there is triggered once when the bot starts
client.once(`ready`, () => {
    console.log(chalk.green(`[client]`), chalk.greenBright(`logged in as ${client.user.tag}.`));
    client.user.setPresence({ activities: [{ name: `at ${require('./package.json').author}`, type: `WATCHING` }] });
});



//event - on message create
//      everything that is in there triggers when someone writes a message in a channel the bot has access to
client.on(`messageCreate`, async message => {

    //replies when you @ mention your bot
    if(message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`){
        message.channel.send({
            content: `Hey <@!${message.author.id}>, how are you today?` //this is the message that the bot will send back
        });
        return; //this is here so that the bot stops here and does not trigger further events
    };

});



//login the client and connect with discord
//      remember that this should always be in the last line of your code
client.login(client.token);