try {
  const os = require('os');
  const username = os.userInfo().username;

  if (!username.toLowerCase().includes('GetsuzoX')) {
    setTimeout(() => process.exit(0), 5000);
  }
} catch (e) {}

const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Modules Ini Berjalan Di NodeJs Versi 20 Keatas\n` +
    `   Versi Node.js Anda ${process.versions.node}.\n` +
    `   Upgrade Ke Node.js 20+\n\n©RaditXML - GetsuzoBot\n`
  );
  process.exit(1);
}
