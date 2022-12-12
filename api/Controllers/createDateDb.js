const blogs = require('../Models/BlogModel.js')

const createDatabase = async (req,res) => {
    try {
        await blogs.create(req.body);
        res.json({'message': 'creado correctamente'})

    } catch (error) {
        res.json({'message': error.message})
    }
}

module.exports = createDatabase;
