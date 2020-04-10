const router = require('express').Router();

const dinnerWheel = require('./dinnerWheel-model');
// const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', (req, res) => {
    
    dinnerWheel.find()
    .then(wheel => {
        res.json(wheel);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    dinnerWheel.findById(id)
    .then(wheel => {
        if(wheel){
            res.json(wheel);
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
    const slotData = req.body;

    dinnerWheel.add(slotData)
    .then(wheel => {
        res.status(201).json(wheel);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new diner"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    dinnerWheel.findById(id)
    .then(wheel => {
        if(wheel){
            dinnerWheel.update(changes, id)
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

    dinnerWheel.remove(id)
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
// function checkRole(roles){
//     return function (req, res, next){
//         if(roles.includes(req.decodedJwt.role)){
//             next();
//         } else {
//             res.status(403).json({ message: "You do not have the correct role for access"})
//         }
//     }
// }