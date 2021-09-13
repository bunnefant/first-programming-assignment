import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-native'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext'


const RegistrationPage = () => {

  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const { registerUser } = useAuth()
  const history = useHistory()

  const handlePress = async () => {
    try {
      await registerUser(username, password)
      history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Register Here</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={onChangeUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.userButton}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => history.push("/")}
          style={styles.userButton}
        >
          <Text>Already Have an Account?</Text>
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
    padding: 15
  },
  userButton : {
    backgroundColor: '#56b081',
    borderRadius: 9,
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
  buttonContainer : {
    backgroundColor: '#202729',
    flexDirection: "row",
    width: "5%",
    textAlign: 'center',
  }
});

export default RegistrationPage;
