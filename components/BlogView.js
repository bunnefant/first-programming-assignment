import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BlogPost from './BlogPost';

const BlogView = ({history}) => {
  const posts = [
    {
      username: "user1",
      text: "hello, beautiful day today in atlanta",
      title: "Weather Today!"
    },
    {
      username: "user2",
      text: "I love dogs",
      title: "Animals are awesome!"
    },
    {
      username: "user3",
      text: "I love cats",
      title: "Animals!"
    },
    {
      username: "user4",
      text: "I have so much hw",
      title: "Studying..."
    },
    {
      username: "user5",
      text: "I'm about to play ping pong",
      title: "Enjoying with friends!"
    }
  ]

  let postList = posts.map((item, index) => {
    return (
      <BlogPost key={index} username={item.username} text={item.text} title={item.title}/>
    )
  });

  console.log(postList);

  return (
    <View style={styles.container}>
      { postList }
      <TouchableOpacity
        style={styles.userButton}
        onPress={() => history.push("/post")}
      >
        <Text>Make a post</Text>
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
