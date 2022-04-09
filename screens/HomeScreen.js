import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/*HEADER */}
            <Header navigation={navigation} />
            {/*STORIES */}
            <Stories />
            {/*POSTS */}
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ScrollView>
            {/*BOTTOM TABS*/}
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
});

export default HomeScreen