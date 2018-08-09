//Person Routes
module.exports = function(app, db) {

    let bodyParser = require('body-parser');
    let Codes = require('./code_model');

    //define middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Get All Conditions
    app.get('/allCode', (req, res) => {
        Codes.find(function(err, code) {
            if (err)
                res.send(err);
            res.json(code);
        });
    });


    app.post('/addCode', (req, res) => {
        var code = new Codes();

        code.title = req.body.title;
        code.codeLeft = req.body.codeLeft;
        code.codeRight = req.body.codeRight;
        code.language = req.body.language;
        code.description = req.body.description;
        code.profile_image =  "http://via.placeholder.com/100x100";

        code.save(function(err, result) {
            if (err)
                res.send(err);
            console.log(result);
        });

        res.json(code);
    });

};