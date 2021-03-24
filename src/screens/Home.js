import React from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,Animated } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'




export default function HomeScreen({navigation}) {
  const scrollY = new Animated.Value(0)
  const diffClamp = Animated.diffClamp(scrollY,0,45)
  const translateY = diffClamp.interpolate({
    inputRange:[0,45],
    outputRange:[0,-45]
  })
  const cardData = [1,2,3,4,5,6,7,8,9,10].map(item => ({
    videoId: item,
    title: 'new video',
    channelTitle: 'Roman Ortynskyi',
  }))
  return (
    <View style={{flex:1}}>
      <Animated.View
      style={{
        transform:[
          {translateY:translateY }
        ],
        elevation:4,
        zIndex:100,
      }}
      >
        <Header />
      </Animated.View>
         
       <FlatList
      data={cardData}
      renderItem={({item})=>{
        return <Card
        videoId={item.videoId}
        title={item.title}
        channel={item.channelTitle}
        />
      }}
    
      keyExtractor={item=>item.videoId}
      onScroll={(e)=>{
          scrollY.setValue(e.nativeEvent.contentOffset.y) 
      }}
      />

    
      
      
    </View>
  );
}
