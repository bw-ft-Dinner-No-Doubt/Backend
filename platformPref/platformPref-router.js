const router = require('express').Router();

const platformPref = require('./platformPref-model');
// const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', (req, res) => {
    
    platformPref.find()
    .then(platform => {
        res.json(platform);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    platformPref.findById(id)
    .then(platform => {
        if(platform){
            res.json(platform);
        } else {
            res.status(404).json({ message: 'could not find platform with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get platform"})
    });
});

//POST
router.post('/', (req, res) => {
    const restaurantData = req.body;

    platformPref.add(restaurantData)
    .then(platform => {
        res.status(201).json(platform);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new platform"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    platformPref.findById(id)
    .then(platform => {
        if(platform){
            platformPref.update(changes, id)
            .then(updatedPlatform => {
                res.json(updatedPlatform);
            });
        } else {
            res.status(404).json({ message: "Could not find a platform with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update platform"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    platformPref.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a platform with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete platform"})
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