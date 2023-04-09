import {Datastore} from 'codehooks-js'

export async function createFunc(req, res) {
    const {collection} = req.params;
    const document = req.body;
    const conn = await Datastore.open();
    const result = await conn.insertOne(collection, document);  
    res.json(result);
}