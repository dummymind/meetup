import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json';
import {FlatList} from 'react-native';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'This is Title' }} />

    <FlatList data={events}
     renderItem={({item})=> <EventListItem event={item}/>}
     className='bg-white'
     ></FlatList>
    
    </>
  );
}

