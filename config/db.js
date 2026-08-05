// GANTI 'mysql' MENJADI 'db'
const db = require('../models'); 

async function connectToDatabase() {
  try {
    // Sekarang `db` sudah bisa dibaca karena sudah di-import di atas
    await db.sequelize.authenticate(); // Tips: Biasanya di Sequelize strukturnya db.sequelize.authenticate()
    console.log('Connection has been established successfully.');

    await db.sequelize.sync({ alter: true }); // Catatan: 'force: true' akan MENGHAPUS & membuat ulang semua tabel setiap restart. Kalau tidak mau data hilang, ganti ke 'alter: true' atau hapus opsinya.
    console.log('Database synchronized.');

  } catch (error) {   
    console.error('Database connection failed:', error.message);
  }
}

module.exports = connectToDatabase;