import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

  if (req.method === "POST") {
    const url =
      "mongodb+srv://Ashudhanik:akdJfCRAt8sCwD5l@cluster0.ump5roa.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    const db = client.db();

    const col = db.collection("meetups");

    await col.insertOne(req.body); 

    await client.close();
    res.status(200).json({message: 'Meetup added successfully!'});
 
  }
}
