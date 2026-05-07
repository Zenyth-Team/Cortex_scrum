const Database = require('better-sqlite3');
const db = new Database('datos.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS secciones (
    id                          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_seccion              TEXT NOT NULL,
    descripcion_de_ubicacion    TEXT NOT NULL
  )
`);

module.exports = db;