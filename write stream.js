const http = require('http');
const fs = require('fs');

const logStream = fs.createWriteStream('server-logs.txt', { flags: 'a' });

const server = http.createServer((req, res) => {
    const logEntry = `${new Date().toISOString()} - ` +  
                     `Path: ${req.url} - ` + 
                     `Method: ${req.method}\n`;

    logStream.write(logEntry);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
