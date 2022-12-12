const blogs = require('../Models/BlogModel.js')

const deleteData = async (req,res) => {
    const {id} = req.params
    try {
        await blogs.destroy({
            where: {
                id
            }
        });
        res.json({"message":"eliminado correctamente"});
    } catch (error) {
        res.json({'message': error.message})
    }
}

module.exports = deleteData;