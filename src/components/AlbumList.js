// this gives us both the React library, and the Component specifically out of it
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Functional components are components that return some amount of JSX, in a function
// used to present static data, can't fetch data or do anything more complicated
// in order to handle data, user events, and all that fun stuff, we need to change
// our component into a class based component, which uses inheritence and other fun stuff

// functional component -> single method that returns some JSX
// class component -> can have many methods, but must have the render method,
// which also returns some amount of JSX
class AlbumList extends Component {
  // albums piece of state, as an empty array to start off
  // a plain js object used to record and respond to user-triggered events
  state = { albums: [] };

  // automatically called when component is about to be rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // the key needs to be unique per item, and constant over re-renders
    // as such, the index in the array is not a good key, as it will change if
    // more elements are added to array
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
