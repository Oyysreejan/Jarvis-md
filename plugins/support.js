const { getJson, getBuffer, System, isPrivate, sleep } = require("../lib/");

System({
    pattern: "help",
    fromMe: isPrivate,
    desc: "jarvis-md support",
    type: "support"
}, async (message) => {
    const name = '》✪⏤͟͞★⃝ꪶ‎𝐒𝐫𝖊𝖊⊭𝖏ꫝ𝖓-𖥘✪͜͡➺', title = "❤️‍🩹 ❯⃞✰ꪶ͢𝐒𝐫𝐞𝐞𝐣𝐚𝐧✰★⃞❯🍃", number = '917439382677', body = "🎀𝐇ᴇʏ  𝐁ᴀʙᴇ 𝐂ᴏᴍᴇ 𝐓ᴏ 𝐌ʏ 𝐋ɪғᴇ🌸🍃";
    const image = "https://i.imgur.com/9A5dxAn.jpeg", sourceUrl = 'https://wa.me/917439382677?text=_𝑯𝒆𝒚+★★𝚯𝐘𝐘_|_𝐒𝚪𝚵𝚵𝐉𝚫𝚴★★+🎀+🎈_';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by Jarvis-md;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});

System({
    pattern: "allplugin",
    fromMe: isPrivate,
    desc: "To get all plugin of jarvis-md",
    type: "support"
}, async (message) => {
    const { value } = await getJson(`https://gist.github.com/Loki-Xer/64f0a652223cb801ecb0f2e8dd1edf65/raw`);
    const { result } = await getJson(`https://gist.githubusercontent.com/Loki-Xer/8aa8f43bb3503daf5f86c52d70519b90/raw`);
    const [plugin, explugin] = [value.plugin, result.plugin];
    const image = await getBuffer(result.image);
    const adon = { title: "External plugins", body: "Ready to use", thumbnail: image, mediaType: 1, mediaUrl: 'https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main', sourceUrl: "https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main", showAdAttribution: true };
    await Promise.all([
        message.client.sendMessage(message.jid, { text: explugin, contextInfo: { externalAdReply: adon } }, { quoted: message }),
        sleep(1000),
        message.client.sendMessage(message.jid, { text: plugin, contextInfo: { externalAdReply: adon } }, { quoted: message })
    ]);
});
