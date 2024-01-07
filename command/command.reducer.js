const { createNewComment } = require('../api/comment');
const logger = require('../config/logger');
const { COLLECT_FEEDBACK } = require('./constants');

const commandReducer = async (interaction) => {
  switch (interaction.commandName) {
    case COLLECT_FEEDBACK.name: //feedback case
      const content = interaction.options.get('your-opinion')?.value
      if (!content) {
        interaction.reply(`Your opinion is not empty`)
      }
      logger.info(`${interaction.user.id} feedback with content: ${content}`)

      const bodyRequest = {
        comment: content,
        discordUserId: interaction.user.id,
        discordUsername: interaction.user.username,
        discordChanelId: interaction.channelId,
      }

      const response = await createNewComment(bodyRequest)
      if (!response.status) {
        return interaction.reply(`An error has occurred, please contact support to help`)
      }
      interaction.reply(`Thanks for reaching out! We’ll be passing this along to the team directly! Good luck playing the game!`)
      break;
    
    // another case

    default:
      return interaction.reply(`Command is invalid, please contact support to help`)
      break;
  }

}

module.exports = commandReducer