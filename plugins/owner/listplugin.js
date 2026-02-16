import fs from 'fs-extra';
import path from 'path';

const listJsFilesRecursively = (directory) => {
  const results = [];
  try {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        results.push(...listJsFilesRecursively(fullPath));
      } else if (entry.isFile() && fullPath.endsWith(".js")) {
        results.push(fullPath);
      }
    }
  } catch (e) {
    console.error(`Gagal membaca direktori: ${directory}`, e);
  }
  return results;
};

let handler = async (m, { reply }) => {
  try {
    const rootDir = process.cwd();
    const pluginsDir = path.resolve(rootDir, './plugins');

    if (!await fs.pathExists(pluginsDir)) {
      return reply('Folder `./plugins/` tidak ditemukan.');
    }

    const files = listJsFilesRecursively(pluginsDir);

    if (files.length === 0) {
      return reply('Tidak ada plugin yang ditemukan di dalam folder `./plugins/`.');
    }

    const fileList = files.map(fullPath => {
      return `• ${path.relative(pluginsDir, fullPath).replace(/\\/g, '/')}`;
    }).join('\n');

    reply(`📦 *Daftar Plugin Terinstal:*\n\n${fileList}`);

  } catch (e) {
    console.error(e);
    reply(`Gagal mengambil daftar plugin:\n${e.message}`);
  }
};

handler.command = ['listplugin'];
handler.owner = true;
handler.help = ['listplug'];
handler.tags = ['owner'];

export default handler;