import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import PublicRoute from './routes/PublicRoute';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import BlogView from './components/BlogView';
import PostView from './components/PostView';

import AuthProvider from './contexts/AuthContext';




export default function App() {
  return (
    <AuthProvider>
      <NativeRouter>
        <Switch>

          <Route exact path='/' component={LoginForm}/>
          <Route exact path='/register' component={RegisterForm}/>
          <Route exact path='/home' component={BlogView}/>
          <Route exact path='/post' component={PostView}/>
        </Switch>
      </NativeRouter>
    </AuthProvider>
  );
}
