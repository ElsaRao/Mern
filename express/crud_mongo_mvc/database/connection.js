import {MongoClient, ObjectId } from 'mongodb';

//Connection with mongo with Mongoose.
const dbConnection = async function() {
  const client = new MongoClient(process.env.DATABASE_URI);
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  } 
  // finally {
    // await client.close()
  // }

  return client;
}


export { dbConnection, ObjectId };