const blogs = require('../Models/BlogModel.js')

const getIdDataBase = async (req,res) => {
    const {id} = req.params
    try {
        const data = await blogs.findAll({
            where : {
                id
            }
        });
        res.json(data);
    } catch (error) {
        res.json({'message': error.message})
    }
}

module.exports = getIdDataBase;