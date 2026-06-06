export default {
  async fetch(request) {
    try {
      const update = await request.json();

      if (!update.message) {
        return new Response("OK");
      }

      const chatId = update.message.chat.id;
      const text = update.message.text;

      let answer = "Ma'lumot topilmadi.";

      if (text === "/start") {
        answer = "8-sinf Algebra botiga xush kelibsiz!";
      }

      if (text === "25") answer = "25-sahifa";
      if (text === "26") answer = "26-sahifa";
      if (text === "27") answer = "27-sahifa";
      if (text === "54") answer = "54-sahifa";

      await fetch(
        "https://api.telegram.org/bot8635608238:AAEXLRzRWpDaskmA4SG6cphiLrTBOvUT_2g/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: answer
          })
        }
      );

      return new Response("OK");
    } catch {
      return new Response("OK");
    }
  }
};
