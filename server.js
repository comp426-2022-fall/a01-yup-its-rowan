const http = require('http');

const fs = require('fs');

const minimist = require('minimist');

var args = minimist(process.argv.slice(2));

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

const port = args.port || process.env.port || 3000;

fs.readFile('./public/index.html', 'utf8', (err, website) => {
    if (err) {
        console.error(err);
        return;
    }


    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(website)
    });


    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    });

});

// That's it! You're all done!
