import TelegramBot from "node-telegram-bot-api";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

app.use(express.static("web"));

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome!", {
    reply_markup: {
      keyboard: [
        [{ text: "🏠 Home", web_app: { url: process.env.WEB_APP_URL + "/index.html" } }],
        [{ text: "💰 Balance", web_app: { url: process.env.WEB_APP_URL + "/balance.html" } }]
      ],
      resize_keyboard: true,
    },
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
