import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'This is Title' }} />

      <EventListItem event={events[0]} />
      <EventListItem event={events[1]} />
      <EventListItem event={events[2]} />
    </>
  );
}

