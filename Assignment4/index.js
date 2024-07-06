const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Parse the requested URL
  let pathname = new URL(req.url, `http://${req.headers.host}`).pathname;
  let filePath = path.join(__dirname, pathname);

  // Check file or directory status
  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Handle 404 Not Found
        return handleNotFound(res);
      } else {
        // Handle other errors
        return handleServerError(res, err);
      }
    }

    if (stats.isDirectory()) {
      // Serve directory listing
      return serveDirectory(res, filePath, pathname);
    } else {
      // Serve file content if it's a file
      return serveFile(res, filePath);
    }
  });
});

// Function to handle 404 Not Found
function handleNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
}

// Function to handle server errors
function handleServerError(res, err) {
  console.error('Server error:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Internal Server Error');
}

// Function to serve directory listing
function serveDirectory(res, filePath, pathname) {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      return handleServerError(res, err);
    }

    // Prepare HTML response for directory listing
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><head><meta charset="utf-8"></head><body><ul>');

    // Iterate through files and directories
    files.forEach(file => {
      let itemPath = path.join(filePath, file);
      let icon = fs.statSync(itemPath).isDirectory() ? '📁' : '📄';
      // Modify the link to point to a dynamic route for directory listing
      res.write(`<li>${icon} <a href="${path.join(pathname, file)}">${file}</a></li>`);
    });

    res.end('</ul></body></html>');
  });
}

// Function to serve file content
function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return handleServerError(res, err);
    }

    // Determine content type based on file extension
    let contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

// Function to determine content type based on file extension
function getContentType(filePath) {
  let extname = path.extname(filePath).toLowerCase();
  switch (extname) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'text/javascript';
    case '.json': return 'application/json';
    case '.png': return 'image/png';
    case '.jpg': return 'image/jpeg';
    default: return 'application/octet-stream';
  }
}

// Set server port and start listening
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
