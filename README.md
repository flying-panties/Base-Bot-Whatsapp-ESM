[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<div align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Inconsolata&weight=500&size=50&duration=4000&pause=300&color=22C55E&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Hello+hello;I%27m+Txra-Dev%2C+Script+Bot+Whatsapp" />
  <img src="https://files.catbox.moe/8aomwf.jpg" />
  <a href="https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04">
    <img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp Channel" />
  </a>

<p align="center">
<a href="https://github.com/flying-panties"><img title="Author" src="https://img.shields.io/badge/OWNER-flying-panties-green.svg?style=for-the-badge&logo=github"></a>
</div>

Hallo, saya Txra-Dev, saya menyediakan script bot WhatsApp yang dikembangkan menggunakan Node.js dengan Type Module (ESM), ditulis menggunakan bahasa pemrograman JavaScript dengan struktur kode yang rapi, modern, dan mudah dikembangkan, dirancang secara modular agar mudah dipahami, dikustomisasi, dan dikembangkan kembali, dilengkapi dengan sistem command yang fleksibel, fitur manajemen panel, serta tampilan pesan interaktif dan profesional, sehingga cocok digunakan untuk kebutuhan developer bot WhatsApp, pengelola panel, pembelajaran, maupun pengembangan project private dan public.

## Requirements
| Requirement | Version |
| ---|---|
| Node | ^24.11.1 |
| NPM | ^11.6.2 |

![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=flat-square&logo=proxmox&logoColor=white)

> [!Note]
> Jika bot WhatsApp sering tidak stabil seperti sering disconnect, delay, atau tidak merespon perintah, penyebab utamanya biasanya berasal dari library Baileys yang digunakan, karena Baileys harus terus menyesuaikan diri dengan update WhatsApp dan versi standar sering kurang optimal untuk bot dengan banyak fitur atau plugin, sehingga rawan reconnect loop dan session error; sebagai solusi, disarankan mengganti Baileys biasa dengan fork yang lebih stabil seperti @whiskeysockets/baileys karena lebih sering dipatch, lebih tahan untuk penggunaan jangka panjang, dan lebih cocok untuk sistem bot besar, meskipun tetap perlu dipahami bahwa tidak ada library WhatsApp non-resmi yang benar-benar 100% stabil, namun pemilihan Baileys yang tepat serta pengelolaan bot yang baik dapat mengurangi masalah secara signifikan

## Upgrade script
<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">config.js</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

```js
import { watchFile, unwatchFile } from 'fs'
import chalk from "chalk"
import { fileURLToPath } from 'url'

/** info id **/
global.owner = ["6282199509537","210780402241764@lid"];
global.mode = false;

/** pairing Code Settings **/
global.pairingPhoneNumber = "-"; // isi nomor bot kalian
global.customPairingCode = "TXRAXDEV"; // set pairing

/** nama bot **/
global.namebotz = "simple bot";
global.packname = 'Txra Dev';
global.nameown = "Txra | Projects";
global.author = 'https://github.com/flying-panties';
global.footer = "𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆: @txradev";

/** message **/
global.mess = {
    limit: `❌ *Limit habis!*\n\nKetik *.claim* untuk claim limit bonus\n*.buyprem* untuk upgrade premium`,
    owner: `🚫 *AKSES DITOLAK*\nFitur ini hanya bisa digunakan oleh *Owner Bot*.`,
    verifikasi: `🚫 *AKSES DITOLAK*\nKetik *.daftar* untuk akses semua fitur bot.`,
    admin: `🚫 *AKSES DITOLAK*\nFitur ini khusus untuk *Admin Grup*.`,
    botAdmin: `🚫 *AKSES DITOLAK*\nBot harus menjadi *Admin Grup* terlebih dahulu untuk menjalankan fitur ini.`,
    group: `🚫 *AKSES DITOLAK*\nFitur ini hanya dapat digunakan di *dalam grup*.`,
    private: `🚫 *AKSES DITOLAK*\nFitur ini hanya bisa digunakan di *chat pribadi*.`,
    prem: `🚫 *AKSES DITOLAK*\nFitur ini hanya tersedia untuk *User Premium*.\n> ketik .prem dan upgrade nomor mu`,
    wait: `⏳ *Mohon tunggu...*\nPermintaan kamu sedang diproses.`,
    error: `❌ *Terjadi kesalahan!*\nSilakan coba lagi nanti.`,
    done: `✅ *Berhasil!*\nProses telah selesai dengan sukses.`
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings/config.js'"))
  import(`${file}?update=${Date.now()}`)
})

```
</div>
</details>
<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">package.json</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

```json
{
  "name": "Txra Dev",
  "version": "1.0.0",
  "description": "credate script by Txra Dev",
  "main": "node index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "@ffmpeg-installer/ffmpeg": "^1.1.0",
    "@hapi/boom": "^10.0.1",
    "@whiskeysockets/baileys": "npm:@denzy-official/baileys@1.2.8",
    "archiver": "^7.0.1",
    "awesome-phonenumber": "^7.6.0",
    "axios": "^1.13.2",
    "canvas": "^3.2.0",
    "chalk": "^5.6.2",
    "cheerio": "^1.1.2",
    "child_process": "^1.0.2",
    "crypto-js": "^4.2.0",
    "figlet": "^1.10.0",
    "ffmpeg-static": "^5.3.0",
    "fluent-ffmpeg": "^2.1.3",
    "fs-extra": "^11.3.2",
    "jimp": "*",
    "js-confuser": "^2.0.0",
    "node-cache": "^5.1.2",
    "node-fetch": "^3.3.2",
    "node-webpmux": "^3.2.1",
    "nodemon": "^3.1.11",
    "os": "^0.1.2",
    "path": "^0.12.7",
    "performance-now": "^2.1.0",
    "pino": "^10.1.0",
    "readline": "^1.3.0",
    "url": "^0.11.4",
    "sharp": "*",
    "syntax-error": "^1.4.0"
  },
  "license": "ISC"
}

```
</div>
</details>

## Install/Run

clone repository
```text
git clone https://github.com/Alifatahfauzi/Simple-bot
cd simple
```

install modules
```text
node index.js
```

run/jalankan
```text
node index.js
```
untuk pairing code, kalian bisa masukin ke dalam `config.js` dan kalian juga bisa mengatur kode pairing bot whatsapp di `config.js` juga semalam bot whatsapp


## Support
- [Txra-Dev Owner Sc] (Dengan Hidup Kan Star ⭐)
