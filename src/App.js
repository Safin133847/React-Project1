import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';   
import DetailPage from './components/DetailPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
