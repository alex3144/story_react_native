//connexion.js test
import 'react-native';
import React from 'react';
// import Profile from '../App/components/profile';
import Connexion from '../App/components/connexion';
// import Auth from '../App/actionAsync/auth/auth';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
   const tree = renderer.create(
    //  <Profile/>
     <Connexion/>
    //  <Auth />
   ).toJSON();
   expect(tree).toMatchSnapshot();
 });

