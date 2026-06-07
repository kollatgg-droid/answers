export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/webhook") {
      return new Response("OK");
    }

    const update = await request.json();

    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: update.message.chat.id,
        text: "TEST OK"
      })
    });

    return new Response("ok");
  }
};
