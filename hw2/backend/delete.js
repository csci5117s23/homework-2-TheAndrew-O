import {Datastore} from 'codehooks-js'

export async function deleteFunc(req, res) {
    const {collection, ID} = req.params;
    const conn = await Datastore.open();  
    const result = await conn.removeOne(collection, ID, {}); 
    res.json(result);    
}