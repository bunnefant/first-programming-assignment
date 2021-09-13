import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import { useAuth } from '../contexts/AuthContext'


const LoginPage = () => {

  const { loginUser } = useAuth()
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const history = useHistory()

  const handlePress = async () => {
    try {
      await loginUser(username, password)
      history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login Here</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username"
          onChangeText={onChangeUsername}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.userButton}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => history.push("/register")}
        >
          <Text>Sign Up</Text>
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
    padding: 30
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
    marginBottom: 10,
    marginTop: 10,
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

export default LoginPage;
