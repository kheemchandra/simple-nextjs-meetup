import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = (props) => { 
  return <MeetupList meetups={props.meetupData} />
};

export async function getServerSideProps(context){
  return {
    props: {
      meetupData: DUMMY_MEETUPS
    }
  }
}
 
// export async function getStaticProps(context) {
//   return {
//     props: {
//       meetupData: DUMMY_MEETUPS
//     },
//     revalidate: 1,
//   }
// }

export default HomePage;