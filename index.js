const { Client, GatewayIntentBits } = require('discord.js');
const { collectFeedbackCommand, runAllCommand } = require('./command/command');
const commandReducer = require('./command/command.reducer');
require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

(startBot = async () => {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  });

  client.on('messageCreate', message => {
    if (message.author.bot) {
      return
    }
    message.reply(`Hi ${message.author.displayName || message.author.username}, please using command “/feedback <comment>” to send your feedback`)
  })

  client.on('interactionCreate', interaction => {
    console.log(interaction.commandName)
    commandReducer(interaction)
  })

  client.login(BOT_TOKEN);
  await runAllCommand(BOT_TOKEN, CLIENT_ID)
  console.log('Bot Discord is running')
})()