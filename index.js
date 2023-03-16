const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h2>INDEX SAYFASINA HOŞGELDİN</h2>');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h2>ABOUT SAYFASINA HOŞGELDİN</h2>');
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h2>CONTACT SAYFASINA HOŞGELDİN</h2>');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h2>404 PAGE NOT FOUND</h2>');
            break;
    }

    res.end();
});

server.listen(port , () => {
    console.log(`Server started on port ${port}`);
});