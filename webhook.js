const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const {REST} = require("@discordjs/rest")
const rest = new REST({version: '9'}).setToken(process.env.discord_token)

module.exports = async (server, options) => {
  async function real(message, embeds, info) {
    let that = {
        "content": message || null,
        "attachments": [],
        "embeds": embeds ? embeds : [],
        "components": []
    }
    try {
    let real = {
      message_data: that,
      event: info.event,
      date: Date.now(),
      data: info.data
    }
    server(JSON.stringify(real), options)
    } catch(_) {
      
    }
  }
  return real
}