const request = require("./request")

const createNewComment = async (body) => {
  try {
    const data = await request.post(`/comment`, body)
    return data.data
  } catch (error) {
    console.log(error)
    return {
      status: false,
      message:error.message
    }
  }
}

module.exports = {
  createNewComment
}