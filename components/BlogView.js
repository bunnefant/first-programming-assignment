import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

  const renderPosts = () => {
    return posts.map(post => {
      return <BlogPost 
        key={post.id} 
        username={post.userId} 
        title={post.title} 
        text={post.text} 
        likes={post.likes}
      /> 
    })
  }

  return (
    <View style={styles.container}>
      {renderPosts()}
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
