import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const PostFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELw_nGmwFS9hTGWdfJlz5EhGV6uaFQ32iqw&usqp=CAU',
        LikedImageUrl: 'https://img.icons8.com/color/48/000000/like--v1.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/color/48/000000/speech-bubble.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/color/48/000000/share.png'
    },
    {
        name: 'Bookmark',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo5_0frzIGfXFPgBIKboUTPJEZtiNPoV4Cg&usqp=CAU' 
    }
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={3} orientation={'vertical'} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
};

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profilePic }} style={styles.postImage} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: 700 }}>
                {post.user}
            </Text>
            <View>
                <Text style={{ color: 'white', fontSize:'900'  }}>...</Text>
            </View>
        </View>
    </View>
);

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{uri: post.imageUrl}} 
                     style={{height: '100%', resizeMode: 'cover'}} 
        />
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image source={{ uri: imgUrl }} style={imgStyle} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: 600 }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600', marginRight: 3 }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length && (
            <Text style={{color: 'gray'}}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{color: 'white'}}>
                    <Text style={{fontWeight: '600'}}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={ styles.leftFooterIconsContainer }>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />  
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
            <Icon imgStyle={[styles.footerIcon]} imgUrl={PostFooterIcons[2].imageUrl} />
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    postImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
        cursor: 'pointer',
    },

    footerIcon: {
        width: 35,
        height: 35,
    },
    
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    },

    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    }
});

export default Post;
