import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import AccountSettings from './pages/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="phone-frame">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/profile" element={<AccountSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
