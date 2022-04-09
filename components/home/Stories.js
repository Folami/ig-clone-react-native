import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users.js'

const Stories = () => {

    return (
        <View style={{ marginBottom: 13}}>
            <ScrollView horizontal 
                        showsHorizontalScrollIndicator={true}
            >
                {USERS.map((story, index) => (
                   <View key={index} style={{ alignItems: 'center' }}>
                      <Image source={{uri: story.image}}
                                      style={styles.userImage}
                        />
                      <Text style={{color: 'white'}}>
                            {story.name.length > 11 
                                ? story.name.slice(0, 10).toLowerCase() + '...' 
                                : story.name.toLowerCase()}
                            </Text>
                   </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
        cursor: 'pointer'
    }
})

export default Stories