export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/webhook") {
      return new Response("Telegram bot is running");
    }

    try {
      const update = await request.json();

      const message = update.message?.text;
      const chatId = update.message?.chat?.id;
      const userId = update.message?.from?.id;

      const TEACHER_ID = 8510843986;

      // доступ только учителю
      if (userId !== TEACHER_ID) {
        return new Response("ok");
      }

      let answer = "Нет такого задания ❌";

      if (message === "1") answer = "Ответ: x = 5";
      if (message === "2") answer = "Ответ: x = 12";
      if (message === "3") answer = "Ответ: x = -3";

      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: answer
        })
      });

      return new Response("ok");
    } catch (e) {
      return new Response("error");
    }
  }
};
