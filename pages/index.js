import { MongoClient } from 'mongodb';

import MeetupList from "../components/meetups/MeetupList";
 
const HomePage = (props) => { 
  return <MeetupList meetups={props.meetupData} />
};

 
export async function getStaticProps(context) {
  const url =
      "mongodb+srv://Ashudhanik:akdJfCRAt8sCwD5l@cluster0.ump5roa.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    const db = client.db();

    const col = db.collection("meetups");

    const meetups = await col.find({}).toArray(); 

    await client.close();

  return {
    props: {
      meetupData: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }))
    },
    revalidate: 1,
  }
}

export default HomePage;