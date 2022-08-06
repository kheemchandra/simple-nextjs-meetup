import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";



export async function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: [
      {params: {
        meetupId: 'm1' 
        }
      },
      {params: {
        meetupId: 'm2' 
        }
      },  
    ]
  }
}

export async function getStaticProps (context){ 
  const meetupId = context.params.meetupId;
  const meetupIdObj = new ObjectId(meetupId);

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
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
};

export default Meetup;
