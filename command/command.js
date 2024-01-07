const { REST, Routes } = require('discord.js');
const { COLLECT_FEEDBACK } = require('./constants');
const logger = require('../config/logger');


const runAllCommand = async (token, clientId) => {
  const rest = new REST({ version: '10' }).setToken(token);
  try {
    const allCommand =[COLLECT_FEEDBACK]
    await rest.put(Routes.applicationCommands(clientId), { body: allCommand }); // add command here

    logger.info(`Command [${allCommand.map(item => item.name).join(', ')}] is running`)
    
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  runAllCommand
}

