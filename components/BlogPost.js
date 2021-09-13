import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const BlogPost = ({username, title, text, likes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        {username}
      </Text>
      <Text style={styles.text}>
        {title}
      </Text>
      <Text style={styles.text}>
        {text}
      </Text>
      <Text style={styles.text}>
        {likes}
      </Text>
      <TouchableOpacity
        style={styles.userButton}
        onPress={() => alert('liking')}
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

export default BlogPost;
