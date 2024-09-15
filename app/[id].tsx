import {Text,View,Image, Pressable} from 'react-native';

import events from '~/assets/events.json';
import dayjs from 'dayjs';
import { useLocalSearchParams,Stack } from 'expo-router';




export default function EventsPage() {

    const { id } = useLocalSearchParams();
    const event = events.find((event) => event.id === id);
if(event==null){
    return <Text>Event not found</Text>
}

  return (
<>
<View className='flex-1 p-3 bg-white'>
    <Stack.Screen options={{ title: 'Event' }} />
    <View className='w-full'><Image source={{uri:event?.image}} 
className='aspect-video  rounded-xl'></Image></View>

<Text className='text-2xl font-bold '>{event?.title}</Text>
<Text className='text-md font-semibold uppercase text-amber-700'>{dayjs(event.datetime).format('ddd D,MMM · h:mm A')}</Text>
<Text className='text-lg'>{event?.description}</Text>

<View className=' flex-row border-t-2 border-gray-200 items-center justify-between absolute bottom-0 left-0 right-0 p-5'>
<Text className='text-xl font-bold'>Free</Text>
<Pressable>
<Text className='text-xl bg-red-400 px-8 p-5 rounded-lg text-white font-bold'>Join and RSVP</Text>
</Pressable>

</View>

    </View>

</>
  );
}
