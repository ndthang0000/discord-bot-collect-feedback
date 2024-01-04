const { Client, GatewayIntentBits } = require('discord.js');
const { runAllCommand } = require('./command/command');
const commandReducer = require('./command/command.reducer');
const config = require('./config/config');//env
const logger = require('./config/logger');


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

  client.on('interactionCreate', commandReducer) //command

  client.login(config.botToken);
  await runAllCommand(config.botToken, config.clientId)

  logger.info(`Bot Discord collect feedback is running...`)
})()