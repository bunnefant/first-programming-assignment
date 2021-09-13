import React from 'react';
import { NativeRouter, Switch } from 'react-router-native';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import BlogView from './components/BlogView';
import PostView from './components/PostView';
import AuthProvider from './contexts/AuthContext';
import LogoutPage from './components/LogoutPage';


export default function App() {
  return (
    <AuthProvider>
      <NativeRouter>
        <Switch>
          <PublicRoute path='/login' component={LoginForm}/>
          <PrivateRoute path='/logout' component={LogoutPage}/>
          <PublicRoute path='/register' component={RegisterForm}/>
          <PrivateRoute exact path={['/', '/home']} component={BlogView}/>
          <PrivateRoute exact path='/post' component={PostView}/>
        </Switch>
      </NativeRouter>
    </AuthProvider>
  );
}
