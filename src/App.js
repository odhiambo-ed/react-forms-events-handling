import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import axios from 'axios';

class App extends React.Component {

  async onSearchSubmit(type) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: type },
      header: {
        Authorization: 'Client-ID zNCIK0Lrm2VATnf_vJCb93wXV7HxL2_LsBEJTAWlj8s'
      }
    });

    console.log(response.data.results);
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
