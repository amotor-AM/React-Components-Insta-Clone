/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/


import React, {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import Posts from "./components/Posts/Posts"
import "./App.css"


import './App.css';

const App = () => {

  return (
    <div className='App'>
      <SearchBar />
      <Posts />
    </div>
  );
};

export default App;
