import { Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import LoginView from './views/authentication/LoginView';
import SignUpView from './views/authentication/SignUpView';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/signup" element={<SignUpView />} />
    </Routes>
  );
}

export default App;
