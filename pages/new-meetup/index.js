import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
 
const NewMeetup = () => {
  const router = useRouter();

  const AddMeetupHandler = async (meetupData) => {
     try{
      const response = await fetch('/api/add-meetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meetupData)
       });
       
       const data = await response.json();
       
       console.log('Data is ', data)
       // imperative navigation
       await router.push('/')
     }catch(e){
      console.log(e.message);
     }     
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
};

export default NewMeetup;