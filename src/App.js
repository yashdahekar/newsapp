import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 6;

  return (
    <Router>
      <NavBar />
      <LoadingBar height={2} color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={<News key="General" setProgress={setProgress} pageSize={pageSize} country="in" category="General" />}
          exact
        />
        <Route
          path="/business"
          element={<News key="business" setProgress={setProgress} pageSize={pageSize} country="in" category="business" />}
          exact
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
          exact
        />
        <Route
          path="/health"
          element={<News key="health" setProgress={setProgress} pageSize={pageSize} country="in" category="health" />}
          exact
        />
        <Route
          path="/science"
          element={<News key="science" setProgress={setProgress} pageSize={pageSize} country="in" category="science" />}
          exact
        />
        <Route
          path="/sports"
          element={<News key="sports" setProgress={setProgress} pageSize={pageSize} country="in" category="sports" />}
          exact
        />
        <Route
          path="/technology"
          element={
            <News key="technology" setProgress={setProgress} pageSize={pageSize} country="in" category="technology" />
          }
          exact
        />
      </Routes>
    </Router>
  );
};

export default App;
