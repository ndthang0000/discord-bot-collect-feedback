const { REST, Routes } = require('discord.js');
const { COLLECT_FEEDBACK } = require('./constants');


const runAllCommand = async (token, clientId) => {
  const rest = new REST({ version: '10' }).setToken(token);
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(clientId), { body: [COLLECT_FEEDBACK] }); // add command here

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  runAllCommand
}

