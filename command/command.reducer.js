const { COLLECT_FEEDBACK } = require("./constants");

const commandReducer = (interaction) => {
  switch (interaction.commandName) {
    case COLLECT_FEEDBACK.name:
      interaction.reply(`Thanks for reaching out! We’ll be passing this along to the team directly! Good luck playing the game!`)

    // another case
    default:
      break;
  }

}

module.exports = commandReducer