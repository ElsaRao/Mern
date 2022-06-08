import { dbConnection, ObjectId } from '../database/connection.js';

const homepage = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('user');
        usersCollection.find({}).toArray((err, userData) => {
            res.render('index', { userData });
        });
    });
    // client.close();
}
const create = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('user');
        usersCollection.insertOne(req.body, (err, result) => {
            console.log(result + ` document inserted successfully!`);
            res.redirect('/users');
        });
    });
}

const deleteUser = (req, res) => {
   console.log("asdasdfsd");
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('user');
       
        usersCollection.deleteOne({'_id': new ObjectId(req.params.id)}, (err, result) => {
            
            console.log(result + ` user deleted successfully!`);
            res.redirect('/users');
            // db.close()
        });
    });
}

const update = (req, res) => {
    console.log(req.params.id);
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('user');
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
        const userData = await client.db('test').collection('user')
            .findOne({
                _id: new ObjectId(req.params.id)
            });
        res.render('updateuser', { userData })

    });


}
// const deleteView = async (req, res) => {
//     dbConnection().then(async (client) => {
//         const userData = await client.db('test').collection('user')
//             .findOne({
//                 _id: new ObjectId(req.params.id)
//             });
//         res.render('deleteUser', { userData })

//     });


// }

export { homepage, updateView, create, update ,deleteUser}