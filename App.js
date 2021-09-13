import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import PublicRoute from './routes/PublicRoute';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';



export default function App() {
  return (
    // <LoginForm/>
    <NativeRouter>
      <Switch>
        <PublicRoute path={['/', '/login']} component={LoginForm}/>
        <PublicRoute path='/register' component={RegisterForm}/>
      </Switch>
    </NativeRouter>
  );
}
