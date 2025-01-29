import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
