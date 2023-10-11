const { Flower } = require('../models');
const { Arrangement } = require('../models');

module.exports = {
    getAllFlowers, getOneFlower, getAllArrangements, getOneArrangement, getFlowerByColor, sortFlowerByPriceAscending, createArrangement, updateArrangement, deleteArrangement
};

//HOMEPAGE FLOWER INVENTORY INDEX ROUTE FUNCTION
async function getAllFlowers(req, res) {
    console.log("getting all the flowers");
    try {
        const flowers = await Flower.find();
        return res.json(flowers);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//FLOWER SHOW ROUTE
async function getOneFlower(req, res) {
    try {
        const id = req.params.id;
        const flower = await Flower.findById(id);
        if (flower) {
            return res.json(flower);
        }
        return res.status(404).send('Flower with the specified ID does not exist.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//ARRANGEMENT INDEX ROUTE
async function getAllArrangements(req, res) {
    try {
        const arrangements = await Arrangement.find();
        res.json(arrangements);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//ARRANGEMENT SHOW ROUTE
async function getOneArrangement(req, res) {
    try {
        const id = req.params.id;
        const arrangement = await Arrangement.findById(id);
        if (arrangement) {
            return res.json(arrangement);
        }
        return res.status(404).send('Arrangement with the specified ID does not exist.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//GET FLOWER BY COLOR FUNCTION
async function getFlowerByColor(req, res) {
    try {
        //JOSH- PLS IMPLEMENT COLOR IN SERVER.JS ROUTE '/flowers/:color'  
        //Make sure model data colors are lower case.  Whether they come in as uppercase or lowercase on front end, .toLowerCase below will bring it in as lowercase so it matches.
        let colorFound = Flower.find({ color: req.params.color.toLowerCase() });
        if (colorFound) {
            return res.json(colorFound);
        }
        throw new Error("Flowers in specified color not found.");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//CREATE ARRANGEMENT
async function createArrangement(req, res) {
    try {
        const arrangement = await Arrangement.create(req.body);
        return res.status(201).json({
            arrangement
        });
    } catch (error) {
        return res.status(500).json({ error: e.message });
    }
}

//UPDATE ARRANGEMENT
async function updateArrangement(req, res) {
    try {
        const id = req.params.id;
        const arrangement = await Arrangement.findByIdAndUpdate(id, req.body, { new: true });
        if (arrangement) {
            return res.status(200).json(arrangement);
        }
        throw new Error("Arrangement not found.");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//DELETE ARRANGEMENT 
async function deleteArrangement(req, res) {
    try {
        const id = req.params.id;
        let arrangement = await Arrangement.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Arrangement deleted");
        }
        throw new Error("Arrangement not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//SORT FLOWERS BY PRICE, ASCENDING
async function sortFlowerByPriceAscending(req, res) {
    try {
        const flowers = await Flower.find().sort('price');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const sortFlowerByPriceAscending = async() => {
//     try {
//         const flowers = await Flower.find().sort('price')
//     } catch (error){
//         return res.status(500).send(error.message)
//     }
// }

// async function main() {
//     try{
//         //await sortFlowerbyPriceAscending
//     } catch (error) {
//         console.error(error)
//     } finally {
//         await db.close
//     }
// }