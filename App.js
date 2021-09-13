import React from 'react';
import { NativeRouter, Switch } from 'react-router-native';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BlogPage from './components/BlogPage';
import PostPage from './components/PostPage';
import AuthProvider from './contexts/AuthContext';
import LogoutPage from './components/LogoutPage';


export default function App() {
  return (
    <AuthProvider>
      <NativeRouter>
        <Switch>
          <PublicRoute path='/login' component={LoginPage}/>
          <PrivateRoute path='/logout' component={LogoutPage}/>
          <PublicRoute path='/register' component={RegistrationPage}/>
          <PrivateRoute exact path={['/', '/home']} component={BlogPage}/>
          <PrivateRoute exact path='/post' component={PostPage}/>
        </Switch>
      </NativeRouter>
    </AuthProvider>
  );
}
