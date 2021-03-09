import React from 'react'
// import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <AddAlbum />
    </div>
  );
  }
}

export default App;
