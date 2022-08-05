import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {

  const AddMeetupHandler = (data) => {
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
};

export default NewMeetup;