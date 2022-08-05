import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg/2560px-Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg",
    title: "Meetup First Title",
    address: "Some street 5, some city",
    description: "This is First Meetup",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg/2560px-Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg",
    title: "Meetup Second Title",
    address: "Some street 15, some city",
    description: "This is second Meetup",
  },
  {
    id: "m3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg/2560px-Estadio_Alfheim%2C_Troms%C3%B8%2C_Noruega%2C_2019-09-04%2C_DD_32.jpg",
    title: "Meetup Third Title",
    address: "Some street 105, some third city",
    description: "This is third Meetup place",
  },
];

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
  return {
    props: {
      meetupId: context.params.meetupId
    }
  };
}


const Meetup = (props) => {

  const selectedMeetupId = props.meetupId

  const selectedMeetup = DUMMY_MEETUPS.find(
    (meetup) => meetup.id === selectedMeetupId
  );

  return (
    <MeetupDetail
      image={selectedMeetup.image}
      title={selectedMeetup.title}
      address={selectedMeetup.address}
      description={selectedMeetup.description}
    />
  );
};

export default Meetup;
