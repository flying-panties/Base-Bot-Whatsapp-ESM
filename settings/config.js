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
