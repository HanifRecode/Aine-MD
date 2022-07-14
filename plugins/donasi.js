let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0815-2946-7548]
│ •  [0859-2837-3550]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler