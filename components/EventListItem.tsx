import React from 'react'
import { View,Text,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function EventListItem(props) {

  const event = props.event;
  return (
<View className='p-3 gap-2'>

<View className='flex-row'>
  <View className='flex-1'>
      <Text className='text-md font-semibold uppercase text-amber-700'>Wed 13,Sep · 19:30 CET</Text>
      <Text className='text-lg font-bold '>{event.title}</Text>
      <Text className='text-gray-700'>{event.location}</Text>
      </View>
<View className='w-2/5'><Image source={{uri:event.image}} 
className='aspect-video  rounded-xl'></Image></View>

</View>

    <View className='flex-row gap-3 '>
        <Text className='mr-auto text-gray-700'>16 going</Text>

        <Feather name='share' size={20} color="gray"></Feather>
        <Feather name='bookmark' size={24} color="gray"></Feather>
    </View>
    
    </View>      

)
}
