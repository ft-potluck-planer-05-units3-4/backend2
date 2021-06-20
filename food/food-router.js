const express = require('express')
const router = express.Router()
const Food = require('./food-model')
const restricted = require('../middleware/restricted-middleware')
const {validFood, validFoodID} = require('../middleware/middleware')

router.use(restricted)

//bringing in /api/food
router.get('/', (req, res, next) => {
    Food.get()
    .then(food => {
        res.status(200).json(food)
    })
    .catch(next)
})

router.get('/:id', validFoodID, (req, res, next) => {
    const id = req.params.id
    Food.getByID(id)
    .then(food => {
        res.status(200).json(food)
    })
    .catch(next)
})

router.post('/', validFood, (req, res, next) => {
    const newFood = req.body
    Food.add(newFood)
    .then(food => {
        res.status(201).json({
            message: `Food '${food.name}' created`,
            food
        })
    })
    .catch(next)
})

router.put('/:id', validFoodID, validFood, (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    Food.update(id, changes)
    .then(change => {
        if(change === 1){
            Food.getByID(id)
            .then(success => {
                res.status(200).json({
                    message: `Food '${success.name}' updated`,
                    success
                })
            })
        }
    })
    .catch(next)
})

router.delete('/:id', validFoodID, (req, res, next) => {
    const id = req.params.id
    Food.remove(id)
    .then(food => {
        if(food){
            res.status(200).json({
                message: 'Food item deleted'
            })
        }
    })
    .catch(next)
})


module.exports = router