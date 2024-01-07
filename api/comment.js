const logger = require("../config/logger")
const request = require("./request")

const createNewComment = async (body) => {
  try {
    const data = await request.post(`/comment`, body)
    return data.data
  } catch (error) {
    logger.error(`Create new comment api error: ${error.message}`)
    return {
      status: false,
      message:error.message
    }
  }
}

module.exports = {
  createNewComment
}