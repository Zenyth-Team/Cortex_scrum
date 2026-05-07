const express = require('express');
const db      = require('./db');
const app     = express();

app.use(express.json());
// GET /secciones - Obtener todas las secciones
app.get('/secciones', (req, res) => {
  const secciones = db.prepare('SELECT * FROM secciones').all();
  res.json(secciones);
});

// POST /secciones - Crear una nueva sección
app.post('/secciones', (req, res) => {
  const { nombre_seccion, descripcion_de_ubicacion } = req.body;
  const result = db.prepare('INSERT INTO secciones (nombre_seccion, descripcion_de_ubicacion) VALUES (?, ?)').run(nombre_seccion, descripcion_de_ubicacion);
  res.status(201).json({ id: result.lastInsertRowid, nombre_seccion, descripcion_de_ubicacion });
});

// PUT /secciones/:id - Actualizar una sección existente
app.put('/secciones/:id', (req, res) => {
  const { id } = req.params;
  const { nombre_seccion, descripcion_de_ubicacion } = req.body;
  const result = db.prepare('UPDATE secciones SET nombre_seccion = ?, descripcion_de_ubicacion = ? WHERE id = ?').run(nombre_seccion, descripcion_de_ubicacion, id);
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Sección no encontrada' });
  }
  res.json({ id, nombre_seccion, descripcion_de_ubicacion });
});
