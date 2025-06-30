const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Modules Ini Berjalan Di NodeJs Versi 20 Keatas\n` +
    `   Versi Node.js Anda ${process.versions.node}.\n` +
    `   Upgrade Ke Node.js 20+\n\n©RaditXML - GetsuzoBot\n`
  );
  process.exit(1);
}
