import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useHistory } from 'react-router-native'
import axios from 'axios'
import BlogPost from './BlogPost';


const BlogView = () => {

  const [posts, setPosts] = useState([])
  const history = useHistory()

  useEffect(() => {
    const retrievePosts = async () => {
      const res = await axios.get('https://first-programming-assignment.herokuapp.com/api/posts')
      setPosts(res.data)
    }
    retrievePosts()
  }, [])

  const renderPost = ({item}) => {
    return <BlogPost
        username={item.userId}
        title={item.title}
        text={item.text}
        likes={item.likes}
    />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={post => post.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.userButton}
        onPress={() => history.push("/post")}
      >
        <Text>Make a post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.userButton}
        onPress={() => history.push("/logout")}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202729',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userButton : {
    backgroundColor: '#56b081',
    borderRadius: 9,
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});

export default BlogView;
