const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  let filePath

  if (req.url === '/' || req.url === '/home' || req.url === '/home.html') {
    filePath = path.join(__dirname, 'pages', 'home.html')
  } 
  else if (req.url === '/about' || req.url === '/about.html') {
    filePath = path.join(__dirname, 'pages', 'about.html')
  } 
  else if (req.url === '/contact' || req.url === '/contact.html') {
    filePath = path.join(__dirname, 'pages', 'contact.html')
  } 
  else if (req.url === '/dashboard' || req.url === '/dashboard.html') {
    filePath = path.join(__dirname, 'pages', 'dashboard.html')
  } 
  else if (req.url === '/profile' || req.url === '/profile.html') {
    filePath = path.join(__dirname, 'pages', 'profile.html')
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Page Not Found')
    return
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Server Error')
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    }
  })

})

server.listen(3000)
console.log('Server is running on http://localhost:3000');