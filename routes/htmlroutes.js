app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));