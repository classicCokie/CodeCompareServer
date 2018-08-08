//Person Routes
module.exports = function(app, db) {

    let bodyParser = require('body-parser');
    let Persons = require('./person_model');

    //define middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Get All Conditions
    app.get('/persons', (req, res) => {
        Persons.find(function(err, persons) {
            if (err)
                res.send(err);
            res.json(persons);
        });
    });

    // Post Conditions
    app.post('/personass', (req, res) => {
        

        for(let i = 0; i < 100; i++) {
            var person = new Persons();
            let name = randomName();
       
            person.id = i;
            person.name = name;
            person.description = "Es ist manchmal erstaunlich, wie einfach und nachhaltig sich schwierige Lebenssituationen durch einen neutralen Vermittler verändern und weitere Konflikte vermieden werden können. Coaching und Mediation können oft völlig neue Wege eröffnen.";
            person.street = "Breckenheimerstraße 28a,";
            person.city = "Hofheim";
            person.postcode = "65719";
            person.searchField = "Wurst Auch ziemlich gut";
            person.profile_image = "http://via.placeholder.com/100x100";
            

            person.save(function(err) {
                if (err)
                    res.send(err);
                
            });
        }
        res.json({ message: 'Condition created!' });

    });

    function randomName() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
};