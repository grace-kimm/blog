import React from 'react';
import store from './app/store';
import './App.css';
import { Provider } from 'react-redux';
import AddPostForm from './components/AddPostForm';

function App() {
  return (
    <Provider store={store}>
      <AddPostForm />
    </Provider>
  );
}

export default App;
