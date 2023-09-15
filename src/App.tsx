import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Trello from './pages/trello';
import Navbar from './components/navbar';
import Modal from './modal';

const App = () => {
  return (
    <Router>
      <Modal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trello" element={<Trello />} />
      </Routes>
    </Router>
  );
};

export default App;
