const { ApplicationCommandOptionType } = require("discord.js")

const COLLECT_FEEDBACK = {
  name: 'feedback',
  description: 'Collect the feedback of user',
  options: [
    {
      name: 'your-opinion',
      description: 'Your Opinion about the Game',
      required: true,
      type: ApplicationCommandOptionType.String
    }
  ]
}

//another command 

module.exports = {
  COLLECT_FEEDBACK
}