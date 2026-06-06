export default {
  async fetch(request) {
    const update = await request.json();

    if (!update.message) {
      return new Response("OK");
    }

    const chatId = update.message.chat.id;
    const text = update.message.text;

    let answer = "Ma'lumot topilmadi.";

    const pages = {
      "25": "25-sahifa",
      "26": "26-sahifa",
      "27": "27-sahifa",
      "54": "54-sahifa"
    };

    if (pages[text]) {
      answer = pages[text];
    }

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
  }
};
