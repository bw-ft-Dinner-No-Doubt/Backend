const router = require('express').Router();

const foodPref = require('./foodPref-model');
// const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', (req, res) => {
    
    foodPref.find()
    .then(pref => {
        res.json(pref);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    foodPref.findById(id)
    .then(pref => {
        if(pref){
            res.json(pref);
        } else {
            res.status(404).json({ message: 'could not find food preference with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get food preference"})
    });
});

//POST
router.post('/', (req, res) => {
    const prefData = req.body;

    foodPref.add(prefData)
    .then(pref => {
        res.status(201).json(pref);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new food preference"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    foodPref.findById(id)
    .then(pref => {
        if(pref){
            foodPref.update(changes, id)
            .then(updatedPref => {
                res.json(updatedPref);
            });
        } else {
            res.status(404).json({ message: "Could not find a food preference with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update food preference"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    foodPref.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a food preference with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete food preference"})
    });
});

module.exports = router;

//check role
// function checkRole(roles){
//     return function (req, res, next){
//         if(roles.includes(req.decodedJwt.role)){
//             next();
//         } else {
//             res.status(403).json({ message: "You do not have the correct role for access"})
//         }
//     }
// }