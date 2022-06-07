import { dbConnection, ObjectId } from '../database/connection.js';

const homepage = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.find({}).toArray((err, userData) => {
            res.render('../views/index', { userData });
        });
    });
    // client.close();
}
const create = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.insertOne(req.body, (err, result) => {
            console.log(result + ` document inserted successfully!`);
            res.redirect('/');
        });
    });
}

const deleteUser = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = user.db('test').collection('items');
        usersCollection.deletetOne(req.body, (err, result) => {
            console.log(result + ` user deleted successfully!`);
            res.redirect('/');
            // db.close()
        });
    });
}

const update = (req, res) => {
    console.log(req.params.id);
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.updateOne(
            { '_id': new ObjectId(req.params.id) },
            { $set: { 'name': req.body.name, 'email': req.body.email} },
            (err, result) => {
                console.log(result.updatedCount + ' document updated successfully!');
                res.redirect('/users');
            });
    });
}

const updateView = async (req, res) => {
    dbConnection().then(async (client) => {
        const userData = await client.db('test').collection('items')
            .findOne({
                _id: new ObjectId(req.params.id)
            });
        res.render('../views/updateuser', { userData })

    });


}
const deleteView = async (req, res) => {
    dbConnection().then(async (client) => {
        const userData = await client.db('test').collection('items')
            .findOne({
                _id: new ObjectId(req.params.id)
            });
        res.render('../views/deleteuser', { userData })

    });


}

export { homepage, updateView, create, update ,deleteUser, deleteView}