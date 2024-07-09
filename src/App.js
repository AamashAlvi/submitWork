import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Default route if no match */}
          <Route path="*" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;