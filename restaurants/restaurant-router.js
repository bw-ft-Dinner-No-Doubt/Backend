const router = require('express').Router();

const Restaurant = require('./restaurant-model');
// const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', (req, res) => {
    
    Restaurant.find()
    .then(restaurant => {
        res.json(restaurant);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Restaurant.findById(id)
    .then(restaurant => {
        if(restaurant){
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'could not find restaurant with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get restaurant"})
    });
});

//POST
router.post('/', (req, res) => {
    const restaurantData = req.body;

    Restaurant.add(restaurantData)
    .then(restaurant => {
        res.status(201).json(restaurant);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new restaurant"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Restaurant.findById(id)
    .then(restaurant => {
        if(restaurant){
            Restaurant.update(changes, id)
            .then(updatedRestaurant => {
                res.json(updatedRestaurant);
            });
        } else {
            res.status(404).json({ message: "Could not find a restaurant with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update restaurant"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Restaurant.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a restaurant with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete restaurant"})
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