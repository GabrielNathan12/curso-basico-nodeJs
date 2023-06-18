import {Router} from 'express';

const routes = Router();

routes.get('/' , (req, res) =>{
    return res.json({mensage : 'Hello Dev!'});
});

export default routes;
