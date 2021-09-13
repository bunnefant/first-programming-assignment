import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


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
  }
});

export default BlogPost;
