import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  // props.children lets you access any tag, nested within a tag you created
  // ie. in AlbumDetail, we have a Text tag, nested in the Card tag, hence,
  // the Text will be available in the props.children of the Card component
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    // round off corners
    borderRadius: 2,
    borderColor: '#ddd',
    // hide bottom of border
    borderBottomWidth: 0,
    shadowColor: '#000',
    // no shadow on left and right, but shadow on bottom
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // round off corners of shadow, to match the rounding of the border
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    // give space between cards in a list
    marginTop: 10
  }
};

export default Card;
