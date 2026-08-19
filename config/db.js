const db = require('../models');

async function connectDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully');
    
    // Hanya jalankan sync jika BUKAN di environment production/Vercel
    if (process.env.NODE_ENV !== 'production') {
      await db.sequelize.sync();
      console.log('Database synchronized');
    }
  } catch (err) {
    console.error('Database connection failed:', err.message);
    // Lempar error ke middleware Express, jangan gunakan process.exit(1)
    throw err;
  }
}

module.exports = connectDatabase;