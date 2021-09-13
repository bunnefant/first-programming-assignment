import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'


const PostView = () => {

  const [title, onChangeTitle] = useState('')
  const [text, onChangeText] = useState('')
  const {currentUser} = useAuth()
  const history = useHistory()

  const handlePress = async () => {
    try {
      console.log(currentUser)
      await axios.post(`https://first-programming-assignment.herokuapp.com/api/users/${currentUser.id}/posts`, {
        title, text
      })
      onChangeTitle('')
      onChangeText('')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Post a message!</Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Title"
          onChangeText={onChangeTitle}
        />
        <TextInput
          style={styles.input}
          multiline={true}
          value={text}
          placeholder='Text'
          onChangeText={onChangeText}
        />

        <TouchableOpacity
          onPress={handlePress}
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
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => history.push("/logout")}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202729',
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
