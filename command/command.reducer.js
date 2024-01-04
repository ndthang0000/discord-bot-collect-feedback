const { createNewComment } = require("../api/comment");
const { COLLECT_FEEDBACK } = require("./constants");

const commandReducer = async(interaction) => {
  switch (interaction.commandName) {
    case COLLECT_FEEDBACK.name: //feedback case
      const content = interaction.options.get('your-opinion')?.value
      if (!content) {
        interaction.reply(`Your opinion is not empty`)
      }
      const body = {
        comment: content,
        discordUserId: interaction.user.id,
        discordUsername: interaction.user.username,
        discordChanelId: interaction.channelId,
      }
      const response = await createNewComment(body)
      if (!response.status) {
        return interaction.reply(`An error has occurred, please contact support to help`)
      }
      interaction.reply(`Thanks for reaching out! We’ll be passing this along to the team directly! Good luck playing the game!`)

    // another case
    default:
      break;
  }

}

module.exports = commandReducer