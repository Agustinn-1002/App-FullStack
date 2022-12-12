const blogs = require('../Models/BlogModel.js')

const getAllDataBase = async (req,res) => {
    try {
        const data = await blogs.findAll();
        res.json(data.map(e => e.toJSON()));
    } catch (error) {
        res.json({'message': error.message})
    }
}

module.exports = getAllDataBase;