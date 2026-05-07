const Database = require('better-sqlite3');
const db = new Database('datos.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS cursos (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre     TEXT NOT NULL,
    instructor TEXT NOT NULL,
    creditos   INTEGER NOT NULL
  )
`);

module.exports = db;
