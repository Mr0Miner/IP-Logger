const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/log', (req, res) => {
    fs.readFile('ip-log.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            return res.status(500).send('Internal Server Error');
        }
        try {
            const logs = JSON.parse(data);
            res.json(logs);
        } catch (parseError) {
            console.error('Error parsing JSON data', parseError);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.post('/log', (req, res) => {
    const logEntry = req.body;

    fs.readFile('ip-log.json', 'utf8', (err, data) => {
        let logs = [];
        if (!err && data) {
            try {
                logs = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON data', parseError);
                logs = [];
            }
        }

        logs.push(logEntry);

        fs.writeFile('ip-log.json', JSON.stringify(logs, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send('Log saved');
            }
        });
    });
});

app.delete('/log', (req, res) => {
    const { timestamp } = req.body;

    fs.readFile('ip-log.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            return res.status(500).send('Internal Server Error');
        }

        let logs;
        try {
            logs = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON data', parseError);
            return res.status(500).send('Internal Server Error');
        }

        logs = logs.filter(log => log.timestamp !== timestamp);

        fs.writeFile('ip-log.json', JSON.stringify(logs, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send('Log deleted');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
