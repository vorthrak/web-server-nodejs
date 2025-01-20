const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware body-parser untuk menangani form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Static files (CSS, JS, Images)
app.use(express.static('public'));

// Route utama
app.get('/', (req, res) => {
  res.render('index');  // Render halaman utama
});

// Route untuk formulir
app.get('/form', (req, res) => {
  res.render('form');  // Render halaman formulir
});

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.send(`Formulir berhasil dikirim! Nama: ${name}, Email: ${email}`);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
