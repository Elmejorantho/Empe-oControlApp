const empeñoRouter = require('express').Router();
const User = require('../models/user');
const Empeño = require('../models/empeñoItem');


empeñoRouter.get('/', async (request, response) => {
    const { user } = request;

    if (!user) {
        return response.sendStatus(401)
        
    }

    await user.populate('empeño')
    response.status(200).json(user.empeño);

});



empeñoRouter.post('/', async (request, response) => {
    const { user } = request;
    
    if (!user) {
        return response.sendStatus(401)
        
    }

    const { item } = request.body;
    const empeñoItems = new Item ({
        text,
        user: user._id
    })
    
    const savedEmpeño = await empeño.save();

    user.empeño = user.empeño.concat(savedEmpeño._id);
    await user.save();

    await user.populate('empeño');
    

    response.status(200).json(savedEmpeño);

});

empeñoRouter.delete('/:id', async (request, response) => {
    const { user } = request;
    
    if (!user) {
        return response.sendStatus(401)
        
    }
    const { id } = request.params;
    await Empeño.findByIdAndDelete(id);

    user.empeño = user.empeño.filter(empeño => empeño.toString()!== id);
    await user.save();
    response.sendStatus(204);
});




module.exports = empeñoRouter;
