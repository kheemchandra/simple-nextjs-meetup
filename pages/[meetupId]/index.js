import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";



export async function getStaticPaths() { 
  const url = 
  "mongodb+srv://Ashudhanik:akdJfCRAt8sCwD5l@cluster0.ump5roa.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  const db = client.db();

  const col = db.collection('meetups');
  
  const selectedMeetup = await col.find({}, {projection: { _id: 1}}).toArray();

  await client.close();


  return {
    fallback: 'blocking',
    paths: selectedMeetup.map( meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }) )
  }
}

export async function getStaticProps (context){ 
  const meetupId = context.params.meetupId; 

  const url = 
  "mongodb+srv://Ashudhanik:akdJfCRAt8sCwD5l@cluster0.ump5roa.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  const db = client.db();

  const col = db.collection('meetups');
  
  const selectedMeetup = await col.findOne({_id: new ObjectId(meetupId)});

  await client.close();

  return {
    props: {
      meetup: { 
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  };
}


const Meetup = (props) => {  

  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta 
          name="description"
          content={props.meetup.description}
        />
      </Head>
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
    </Fragment>
  );
};

export default Meetup;
