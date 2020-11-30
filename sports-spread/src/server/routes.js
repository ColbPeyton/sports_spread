import * as express from 'express';

import DB, { connection } from './db';

const router = express.Router();


router.get('/api/lineData', async (req, res) => {
    try{
        let data = await DB.lineData.all();
        res.json(data)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})

connection.end();

export default router;