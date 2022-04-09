import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Divider, Image } from "react-native-elements";


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zVxPbRMbXfqSQN_UhuhzF0q6HI2Qf_bnsA&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0o9fBEtdKGUuUCYrCz7XFHo4gdYUtl4m5w&usqp=CAU'
    },
    {
        name: 'Search',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ng3wXzVhT_ZXloID0WEEu6WylOtr6SFfCg&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlK1nQYUqfLn_2_OlBBNVHOT-BByGzYhYyQ&usqp=CAU'
    },
    {
        name: 'Reels',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJJlRYZ3D8guXpKn2GcYQwPrW9kVU6Wu0Hw&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxcbnV4M-37cJSCkYIAukbMtwJ6E_M2gN4Q&usqp=CAU'
    },
    {
        name: 'Shop',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlmlIbVCggNYS84rsSjsmB0Stj94iDqtVvg&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnFnz4NGxyKVG-5wiW9zv49keSSU9hy7s_w&usqp=CAU'
    },
    {
        name: 'Profile',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72OkfWUCKRGI5B7hVx5GKqkLRCzD9RTUdbg&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk1c8gnxrY1RdlrV4t-_u7_Pl9Dyi_wnfUA&usqp=CAU'
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
                            style={[styles.icon, 
                                        icon.name === 'Profile' ? styles.profileIcon : null,
                                        activeTab=== 'Profile' && icon.name === activeTab 
                                            ? styles.profileIcon
                                            : null
                                      ]} 
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'fixed',
        width: '100%',
        bottom: '0',
        zIndex: 999,
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1
    },
    profileIcon:  (activeTab = '') => ({
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: activeTab === 'Profile' ? 2 : 1,
    })
})

export default BottomTabs