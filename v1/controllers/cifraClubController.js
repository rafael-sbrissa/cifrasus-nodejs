module.exports = function(app) {

    app.get("/v1/cipherjson/:url", function(req, res) {
        var url = req.params.url;
        console.log(url);
        res.send(url);
    });

    app.get("/", function(req, res) {
        res.send('Vem pra cá vem pra cá');
    });

    app.post("/v1/cipherjson", function(req, res) {
        var body = req.body;
        var url = body.url;
        var https = require('https');

        var data = '';
        var request = https.request(url, function(resp) {

            resp.on('data', function(chunk) {
                data += chunk;
            });
            resp.on('end', function() {
                if (data.includes('<div class="g-side-ad">')) { //Cifra club
                    var cb = new app.v1.classes.trataCifraClub();
                    res.json(cb.getCifraHtml(data));
                } else if (data.includes('<div class="coremain">')) { //Cifras
                    console.log('cifras.com.br');
                } else {
                    error_var = {};
                    console.log('Não achamos nenhuma cifra!');
                    res.status(404);
                    error_var.message = 'Não achamos nenhuma cifra!';
                    console.log(error_var);
                    res.json(error_var);
                    request.end();
                }
                //res.send(data);
                //res.status(200);
            });
        });
        request.on('error', function(e) {
            console.log(e.message);
        });

        request.end();
    });

};