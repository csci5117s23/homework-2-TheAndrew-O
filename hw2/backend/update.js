import {Datastore} from 'codehooks-js'

export async function updateFunc(req, res) {
      const {collection, ID} = req.params;
      const document = req.body;
      const conn = await Datastore.open();  
      const result = await conn.updateOne(collection, ID, document, {}); 
      res.json(result);   
}