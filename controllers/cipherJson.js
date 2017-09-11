module.exports = function(app) {

    app.get("/v1/cipherjson/:url", function(req, res) {
        var url = req.params.url;
        console.log(url);
        res.send(url);
    });

    app.post("/v1/cipherjson/", function(req, res) {
        var body = req.body;
        var url = body.url;
        var https = require('https');

        var data = '';
        var pag = '';
        var request = https.request(url, function(resp) {

            resp.on('data', function(chunk) {
                data += chunk;
            });
            resp.on('end', function() {
                console.log(data);
                if (data.includes('<div class="g-side-ad">')) { //Cifra club
                    var cb = new app.classes.trataCifraClub(data);
                    cb.getCifraHtml(data);
                    //res.json(cb.getCifraHtml(data));
                } else if (data.includes('<div class="coremain">')) { //Cifras
                    console.log('cifras.com.br');
                } else {
                    console.log('Não achamos nenhuma cifra nesse site ¯\_(ツ)_/¯');
                    res.send('Não achamos nenhuma cifra nesse site ¯\_(ツ)_/¯');
                    return;
                }
                res.send(data);
                res.status(200);
            });
        });
        request.on('error', function(e) {
            console.log(e.message);
        });

        request.end();
        console.log(pag);

    });
};