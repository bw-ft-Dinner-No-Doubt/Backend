const router = require('express').Router();

const Diner = require('./diner-model');
const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', restricted, checkRole('diner', 'admin'), (req, res) => {
    
    Diner.find()
    .then(diner => {
        res.json(diner);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', restricted, (req, res) => {
    const { id } = req.params;

    Diner.findById(id)
    .then(diner => {
        if(diner){
            res.json(diner);
        } else {
            res.status(404).json({ message: 'could not find diner with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get diner"})
    });
});

//POST
router.post('/', (req, res) => {
    const dinerData = req.body;

    Diner.add(dinerData)
    .then(diner => {
        res.status(201).json(diner);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new diner"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Diner.findById(id)
    .then(diner => {
        if(diner){
            Diner.update(changes, id)
            .then(updatedDiner => {
                res.json(updatedDiner);
            });
        } else {
            res.status(404).json({ message: "Could not find a diner with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update diner"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Diner.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a diner with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete diner"})
    });
});

module.exports = router;

//check role
function checkRole(roles){
    return function (req, res, next){
        if(roles.includes(req.decodedJwt.role)){
            next();
        } else {
            res.status(403).json({ message: "You do not have the correct role for access"})
        }
    }
}