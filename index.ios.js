// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
// if the package is coming from an npm install, we can just use the name
// if the package is coming from our own folder, we have to provide the path
// because all node modules are unique, so no path needed, but we could have many
// different files with the same name "header", in many different folders, hence need the path
import Header from './src/components/header';

// Create a component
const App = () => (
  // tags without any content can be made into self closing tags
  // passing in the props object, and setting an attr of headerText
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
