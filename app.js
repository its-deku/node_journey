const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write("<html><body>");
        res.write("<form action='/create-users' method='POST'>");
        res.write("Username: <input type='text' name='userdata'>");
        res.write("<br><input type='submit' value='Submit'>");
        res.write("</form>");
        res.write("</body></html>");
        return res.end();
    }
    if (url === '/users') {
        res.write("<html><body><ul>Users<li>deku</li><li>ippo</li><li>goku</li></ul></body></html>");
    }
    if (url === '/create-users') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            res.end();
        });
    }
});

server.listen(3077);
