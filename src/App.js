import React from 'react'
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container-fluid">
        <Nav />
        <div className="ui container">
          <div className="ui segment">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;