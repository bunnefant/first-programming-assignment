import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios'

const BlogCard = (card) => {

  const [post, setPost] = useState(card)

  const handlePress = async () => {
    const res = await axios.put(`https://first-programming-assignment.herokuapp.com/api/posts/${post.id}`, {})
    setPost(res.data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        {post.userId}
      </Text>
      <Text style={styles.text}>
        {post.title}
      </Text>
      <Text style={styles.text}>
        {post.text}
      </Text>
      <Text style={styles.text}>
        {post.likes}
      </Text>
      <TouchableOpacity
        style={styles.userButton}
        onPress={handlePress}
      >
        <Text>Like</Text>
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
    borderColor: '#56b081',
    borderWidth: 3,
    borderRadius: 9,
    padding: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  username: {
    color: '#fbfbfb'
  },
  text: {
    alignItems: 'center',
    color: '#fbfbfb',
  },
  userButton : {
    backgroundColor: '#56b081',
    borderRadius: 9,
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});

export default BlogCard;
