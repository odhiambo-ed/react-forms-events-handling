import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import unsplash from './api/unsplash';

class App extends React.Component {
  state = {images: []}

  onSearchSubmit = async (type) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: type }
    });

    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container-fluid">
        <Nav />
        <Form onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
