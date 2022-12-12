const blogs = require('../Models/BlogModel.js')

const updateData = async (req,res) => {
    const {id} = req.params
    try {
        await blogs.update(req.body,{
            where: {
                id
            }
        });
        res.json({"message":"actualizado correctamente"});
    } catch (error) {
        res.json({'message': error.message})
    }
}

module.exports = updateData;