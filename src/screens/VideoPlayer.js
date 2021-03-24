import React from 'react';
import { StyleSheet, Text, View,Dimensions, Button, SafeAreaView} from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import {MaterialIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const VideoPlayer = ({route})=>{
    const {videoId,title} = route.params
   return(
       <SafeAreaView>
           <ScrollView>
        <View style={{
            flex:1,
            marginTop:Constant.statusBarHeight
            }}>
            <View style={{
                width:"100%",
                height:200
            }}>
                <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                />

            </View>
            <Text style={{
                fontSize:20,
                width:Dimensions.get("screen").width - 50,
                margin:9
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View
                style={{borderBottomWidth:1}}
            />
            <View>
                    <Text>{'Лайк)'}</Text>
                <Text>{'Не лайк('}</Text>
                <Text>{'100 переглядів'}</Text>
                <Text>{'24.03.2021'}</Text>
                
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <MaterialIcons name="account-circle" size={40} color="#212121" />
                <View>
                    <Text>Roman Ortynskyi</Text>
                    <Text>200 підписників</Text>
                </View>
                <Button
                    title={'Підписатись'}
                    onPress={() => {}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Коментарі</Text>
                <Text>14</Text>
            </View>
            
            <View style={{
                flexDirection: 'row',
            }}>
                <TextInput
                    style={{
                        borderWidth: 3,
                        width: '80%',
                    }}
                />
                    <Button
                        title={'+'}
                        onPress={() => {}}
                    />
            </View>

            <View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <MaterialIcons name="account-circle" size={40} color="#212121" />
                    <View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text>Vasya Pupkin</Text>
                            <Text>24.03.2021</Text>
                        </View>
                        <Text>Nice!</Text>

                    </View>
                </View>
            </View>
            
        </View>
        </ScrollView>
       </SafeAreaView>
   )
}

export default VideoPlayer