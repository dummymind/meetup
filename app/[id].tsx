import {Text} from 'react-native';

import events from '~/assets/events.json';

import { useLocalSearchParams } from 'expo-router';



export default function EventsPage() {

    const { id } = useLocalSearchParams();
    const event = events.find((event) => event.id === id);

  return (

    <Text>Events Page: {event?.title}</Text>)
}
