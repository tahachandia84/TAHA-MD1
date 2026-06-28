// dont change any line this file

module.exports = {
  config: {
    name: "allbots",
    aliases: ["bots", "mybots", "links"],
    permission: 0,
    prefix: true,
    description: "Send all my bot links and tutorials",
    categories: "Utility",
    usages: [".allbots"],
    credit: "Developed by Mohammad Nayan"
  },

  start: async ({ api, event }) => {
    const { threadId, message } = event;

    const myNumber = "03474771404";
    const msg = `🌟 *MY BOT COLLECTION* 🌟

📱 *WhatsApp Bot*
Link: Follow the ROMANTIC CHENNEL 😘 channel on WhatsApp: https://whatsapp.com/channel/0029Vb7q6gUK0IBZBqFs4y2R
Tutorial: https://youtu.

💬 *Messenger Bot*
Link: Follow the ROMANTIC CHENNEL 😘 channel on WhatsApp: https://whatsapp.com/channel/0029Vb7q6gUK0IBZBqFs4y2R
Tutorial: https://youtu.be

🤖 *Telegram Bot*
Link: Follow the ROMANTIC CHENNEL 😘 channel on WhatsApp: https://whatsapp.com/channel/0029Vb7q6gUK0IBZBqFs4y2R
Tutorial: https://youtu.

🛠️ *Support Channel*
Link: Follow the ROMANTIC CHENNEL 😘 channel on WhatsApp: https://whatsapp.com/channel/0029Vb7q6gUK0IBZBqFs4y2R

📞 *Contact Me*: +${myNumber}`;

    await api.sendMessage(threadId, { text: msg }, { quoted: message });
  }
};
