import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation} />
        </View>
    )
}

const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBO_FBIajvmufNmbG9tc-cBYdpNML16eAug&usqp=CAU' }}
                          style={styles.backImage}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },

    backImage: { 
        width: 25, 
        height: 25, 
        borderRadius:15, 
        borderColor: 'gray', 
        borderWidth: 4,
        marginTop: 5,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 20,
        marginRight: 25,
    }
})

export default AddNewPost