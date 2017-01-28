// Import libraries to use
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    // we want the text to be provided by the parent component, ie the App
    // thus we will get it in as a 'props object' passed in to us by the App
    // props gets passed in as a JS object, hence get attributes like JSON
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    // move elements vertically
    justifyContent: 'center',
    // move elements horizontally
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // colour of the shadow
    shadowColor: '#000',
    // dimensions of the shadow
    shadowOffset: { width: 0, height: 2 },
    // darkness or severity of the shadow, between 0 and 1
    shadowOpacity: 0.2,
    // probably z-index?
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of app, only the root component (like App)
// uses the AppRegistry, as this is the only component we want to show on startup
// the rest of the components are children to the root component, and are made
// available through export statements
export default Header;
