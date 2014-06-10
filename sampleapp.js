var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
//server.listen(1234);
server.listen(process.env.PORT, process.env.IP);
console.log('Server running!');

// リクエストの処理
function doRequest(req, res) {
    var number = Math.floor(Math.random() * 3);
    fs.readFile('./hello.html', 'UTF-8',
        function(err, data) {
            var title = ["Page-A", "Page-B", "Page-C"];
            var content = ["※これはサンプルです。", "別のページです。", "おまけ"];
            var data2 = data.replace(/@title@/g, title[number])
                            .replace(/@content@/g, content[number]);
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data2);
            res.end();
    });
}

