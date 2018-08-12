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

    // Get All the Code
    app.get('/allCode', (req, res) => {
        Codes.find(function(err, code) {
            if (err)
                res.send(err);
            res.json(code);
        });
    });
    
    app.get('/code/:id', (req, res) => {
        Codes.findById(req.params.id, function(err, code) {
            if (err)
                res.send(err);
            res.json(code);
        });
    });

    app.post('/vote/left', (req, res) => {

        Codes.update(
            {_id: req.body.id},
            { $inc: { codeLeftVotes: 1}},
            (err, code) => {
                if (err)
                    res.send(err);
                res.json(code);
        });

    });

    app.post('/vote/right', (req, res) => {

        Codes.update(
            {_id: req.body.id},
            { $inc: { codeRightVotes: 1}},
            (err, code) => {
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
        code.codeLeftVotes = 0;
        code.codeRightVotes = 0;
        code.language = req.body.language;
        code.description = req.body.description;
        code.profile_image =  "http://via.placeholder.com/100x100";

        code.save((err, result) => {
            if (err)
                res.send(err);
            res.json(code);
        }); 
    });

    app.delete('/codes/all', (req, res) => {
        Codes.remove({}, (err, user) => {
            if (err)
                throw err;
        });
        res.send( { message : 'Deleted All'});
    });
};