
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { object, string, number, date } from 'yup';
import { createFunc } from './create';
import { readOneFunc, readManyFunc } from './read';
import { deleteFunc } from './delete';
import { updateFunc } from './update';

const userSchema = object({
  body: string().required(),
  complete: number().required().positive().integer(),
});
// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

app.get('/test', (req, res) => {
  res.send({result: 'CRUD serveasdadsr ready'})
})

app.post('/:collection', createFunc);
app.get('/:collection', readManyFunc);
app.get('/:collection/:ID', readOneFunc);   
app.put('/:collection/:ID', updateFunc);
app.delete('/:collection/:ID', deleteFunc);
// Use Crudlify to create a REST API for any collection
// crudlify(app, {user: userSchema})

// bind to serverless runtime
export default app.init();
