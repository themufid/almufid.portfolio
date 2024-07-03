const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk mengakses file statis
app.use('/assets', express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './contact.html'));
});

app.get('/learn', (req, res) => {
  res.sendFile(path.join(__dirname, './learn.html'));
});

app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, './project.html'));
});

app.get('/faqs', (req, res) => {                       res.sendFile(path.join(__dirname, './faqs.html')); });

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, './services.html'));
});

app.get('/security/disclaimer', (req, res) => {
  res.sendFile(path.join(__dirname, './security/disclaimer.html'));
});

app.get('/security/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, './security/privacy-policy.html'));
});

app.get('/security/term-and-conditions', (req, res) => {
  res.sendFile(path.join(__dirname, './security/term.html'));
});

app.get('/security/sitemap', (req, res) => {
  res.sendFile(path.join(__dirname, './security/sitemap.html'));
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
