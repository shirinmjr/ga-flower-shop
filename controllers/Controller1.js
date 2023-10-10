const Flower = require('../models/flower')
const Arrangement = require('../models/arrangement')

module.exports = {
    getAllFlowers, getOneFlower, getFlowerByColor, sortFlowerbyPriceAscending
}


//HOMEPAGE SHOW FLOWER INVENTORY ROUTE FUNCTION
async function getAllFlowers(req, res) {
    try {
        const flowers = await Flower.find()
        res.json(flowers)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

//DON'T THINK I NEED THIS?
async function getOneFlower(req, res){
    try{
        const id = req.params.id
        const flower = await Flower.findById(id)
        if (flower) {
            return res.json(flower)
        }
        return res.status(404).send('Flower with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//GET FLOWER BY COLOR FUNCTION
async function getFlowerByColor(req, res) {
    try {
        let colorFound = flowers.filter((flower) => flower.color === req.params.color)
        if (colorFound){
            return res.json(colorFlower)
        }
        throw new Error("Flowers in specified color not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SORT FLOWERS BY PRICE, ASCENDING
const sortFlowerbyPriceAscending = async() => {
    try {
        const flowers = await Flower.find().sort('price')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function main() {
    try{
        //await sortFlowerbyPriceAscending
    } catch (error) {
        console.error(error)
    } finally {
        await db.close
    }
}