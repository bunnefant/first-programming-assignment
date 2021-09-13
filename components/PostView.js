import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const PostView = ({history}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Post a message!</Text>
        <TextInput
          style={styles.input}
          multiline={true}
        />

        <TouchableOpacity
          onPress={() => alert("posting a message")}
          style={styles.userButton}
        >
          <Text>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => history.push("/home")}
          style={styles.userButton}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202729',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fbfbfb',
    padding: 30
  },
  input : {
    backgroundColor: '#fbfbfb',
    borderColor: '#56b081',
    borderWidth: 3,
    borderRadius: 9,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    padding: 40
  },
  userButton : {
    backgroundColor: '#56b081',
    borderRadius: 9,
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});

export default PostView;
