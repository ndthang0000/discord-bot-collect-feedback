# discord-bot-collect-feedback
Bot Discord hỗ trợ nhóm Cộng đồng thu thập phản hồi từ người chơi về trải nghiệm trò chơi
# Quick start
Install the dependencies:
```bash
yarn install
```
Set the environment variables:

```bash
cp .env.example .env
```
- API_ACCESS_TOKEN: You can get by via https://api-discord-bot.catstudy.click/v1/docs.
- BOT_TOKEN: is a token of discord bot
- CLIENT_ID: get in your OAuth2 in portal discord
# Running the project:

```bash
yarn start
```
# Demo
- https://discord.com/channels/1192299960457248808/1192299961824579634
- Using /feedback <comment> to leave a valid comment. Bot will send comments to backend to handle and store
