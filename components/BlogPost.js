import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const BlogPost = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        {props.username}
      </Text>
      <Text style={styles.text}>
        {props.title}
      </Text>
      <Text style={styles.text}>
        {props.text}
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
    alignItems: 'left',
    color: '#fbfbfb',
  },
  text: {
    alignItems: 'center',
    color: '#fbfbfb',
  }
});

export default BlogPost;
