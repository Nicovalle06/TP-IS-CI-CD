const express = require('express');
const app = express();
const path = require('path');



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para procesar suma
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) + parseFloat(num2);
  res.json({ resultado });
});

// Iniciar servidor
const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}


module.exports = app;