/**
 * Serveur Node.js simple pour servir le site statique
 * @author Rayane Laidi
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier 'out'
app.use(express.static(path.join(__dirname, 'out')));

// Rediriger toutes les routes vers index.html (pour le routing client-side)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
