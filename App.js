import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import PublicRoute from './routes/PublicRoute';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';



export default function App() {
  return (
    // <LoginForm/>
    <View>
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={LoginForm}/>
          <Route exact path='/register' component={RegisterForm}/>
        </Switch>
      </NativeRouter>
    </View>

  );
}
