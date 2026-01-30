import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import F1Page from './pages/F1Page';

const App = () => {
  return (
    <Router>
      <div className="content">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
          <Link to="/f1" className="text-blue-600 hover:underline">F1 Drivers</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Patrick's Land. </h1>
                <p>Start building amazing things with Rsbuild.</p>
              </>
            }
          />
          <Route path="/f1" element={<F1Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
