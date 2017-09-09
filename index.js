var app = require("./config/express-config")();
app.listen(3000, function() {
    console.log("Running on http://localhost:3000");
});