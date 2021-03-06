import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      //    headerTintColor: '#fff',
      //    headerStyle: {
      //      backgroundColor: '#7159c1',
      //    },
      cardStyle: { backgroundColor: '#312e38' },
    }}
    //   initialRouteName="SignUp"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
